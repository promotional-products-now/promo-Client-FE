/// <reference lib="WebWorker" />

import { json } from "@remix-run/server-runtime";

export type {};
declare let self: ServiceWorkerGlobalScope & { __WB_MANIFEST: Array<{ url: string }> };

// Function to get the current date in YYYY-MM-DD format
function getFormattedDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Cache versioning with YYYY-MM-DD format
const CACHE_VERSION = `v1-${getFormattedDate()}`;
const ASSET_CACHE = `asset-cache-${CACHE_VERSION}`;
const DATA_CACHE = `data-cache-${CACHE_VERSION}`;
const DOCUMENT_CACHE = `document-cache-${CACHE_VERSION}`;
const IMAGE_CACHE = `image-cache-${CACHE_VERSION}`;

const STATIC_ASSETS = ["/build/", "/icons/"];
const MAX_CACHE_SIZE = 2000; // size limit for asset cache
const ASSET_EXPIRATION_TIME = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
const IMAGE_CACHE_EXPIRATION = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

const OFFLINE_URL = "/offline";

function debug(...messages: any[]): void {
  if (process.env.NODE_ENV === "development") {
    console.debug(...messages);
  }
}

async function handleInstall(event: ExtendableEvent): Promise<void> {
  debug("Service worker installed");
  const assetCache = await caches.open(ASSET_CACHE);

  const criticalRoutes = [
    // Add routes that need to be cached at install time
    OFFLINE_URL,
  ];

  try {
    // Cache critical routes directly
    await assetCache.addAll(criticalRoutes);
  } catch (error) {
    debug("Failed to pre-fetch assets during installation:", error);
  }
}

async function handleActivate(event: ExtendableEvent): Promise<void> {
  debug("Service worker activated");

  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.map((cacheName: string) => {
      if (!cacheName.includes(CACHE_VERSION)) {
        debug("Deleting old cache:", cacheName);
        return caches.delete(cacheName);
      }
    }),
  );

  await removeExpiredImages(); // Clean up old images
  await removeExpiredAssets(); // Clean up expired assets
  self.clients.claim();
}

async function handleMessage(event: ExtendableMessageEvent): Promise<void> {
  const cachePromises: Map<string, Promise<void>> = new Map();

  const { isMount, location, matches, manifest } = event.data;
  const documentUrl = location.pathname + location.search + location.hash;

  const [dataCache, documentCache, existingDocument] = await Promise.all([
    caches.open(DATA_CACHE),
    caches.open(DOCUMENT_CACHE),
    caches.match(documentUrl),
  ]);

  if (!existingDocument || !isMount) {
    debug("Caching document for", documentUrl);
    cachePromises.set(
      documentUrl,
      documentCache
        .add(documentUrl)
        .then(() => pruneCache(DOCUMENT_CACHE))
        .catch((error) => {
          debug(`Failed to cache document for ${documentUrl}:`, error);
        }),
    );
  }

  if (isMount) {
    for (const match of matches) {
      if (manifest.routes[match.id].hasLoader) {
        const params = new URLSearchParams(location.search);
        params.set("_data", match.id);
        const search = params.toString();
        const url = location.pathname + (search ? `?${search}` : "") + location.hash;
        if (!cachePromises.has(url)) {
          debug("Caching data for", url);
          cachePromises.set(
            url,
            dataCache
              .add(url)
              .then(() => pruneCache(DATA_CACHE))
              .catch((error) => {
                debug(`Failed to cache data for ${url}:`, error);
              }),
          );
        }
      }
    }
  }

  await Promise.all(cachePromises.values());
}

async function handleFetch(event: FetchEvent): Promise<Response> {
  const request = event.request;

  // Stale-While-Revalidate strategy for documents and data
  if (isDocumentGetRequest(request) || isLoaderRequest(request)) {
    const cache = await caches.open(DOCUMENT_CACHE);
    const cachedResponse = await cache.match(request);

    try {
      const networkResponse = await fetch(request);
      const clonedResponse = networkResponse.clone();

      // Parse the document to extract asset URLs
      const htmlText = await clonedResponse.text();
      const assetsToCache = extractAssetUrls(htmlText);

      // Cache the document and extracted assets
      cache.put(request, networkResponse.clone());
      const assetCache = await caches.open(ASSET_CACHE);

      assetCache.addAll(assetsToCache);

      debug("Cached assets:", assetsToCache);
      pruneCache(DOCUMENT_CACHE); // Prune the document cache after adding the new item

      return networkResponse;
    } catch (error) {
      debug("Network request failed; serving from cache:", error);
      return (
        cachedResponse ||
        (await caches.match(OFFLINE_URL)) ||
        new Response("Offline", { status: 503 })
      );
    }
  }

  // Cache-First strategy for images, CSS, and JS assets
  if (isAssetRequest(request) || isImageRequest(request)) {
    const cacheName = isImageRequest(request) ? IMAGE_CACHE : ASSET_CACHE;
    const cache = await caches.open(cacheName);

    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.status === 200) {
      cache.put(request, networkResponse.clone());
      await pruneCache(cacheName); // Prune the cache after adding the new item
    }

    return networkResponse;
  }

  // Default behavior (network first for other requests)
  return fetch(request).catch(async () => {
    return (await caches.match(OFFLINE_URL)) || new Response("Offline", { status: 503 });
  });
}

/**
 * Extracts URLs of assets from the HTML string using a regular expression.
 * @param htmlText - The HTML document as a string.
 * @returns An array of asset URLs to cache.
 */
function extractAssetUrls(htmlText: string): string[] {
  const urls = new Set<string>();
  const regex = /<link[^>]+href="([^"]+)"|<script[^>]+src="([^"]+)"|<img[^>]+src="([^"]+)"/g;
  let match;

  while ((match = regex.exec(htmlText)) !== null) {
    if (match[1]) {
      // This is a link tag
      urls.add(match[1]);
    }
    if (match[2]) {
      // This is a script tag
      urls.add(match[2]);
    }
    if (match[3]) {
      // This is an image tag
      urls.add(match[3]);
    }
  }

  return Array.from(urls);
}

async function pruneCache(cacheName: string): Promise<void> {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();

  if (keys.length > MAX_CACHE_SIZE) {
    // Extract URLs from the Request objects
    const urls = keys.map((request) => request.url);

    // Sort URLs based on some criteria, such as the date included in the URL (if applicable)
    urls.sort((a, b) => {
      const aDateMatch = a.match(/(\d{13})/);
      const bDateMatch = b.match(/(\d{13})/);
      const aDate = aDateMatch ? parseInt(aDateMatch[0], 10) : 0;
      const bDate = bDateMatch ? parseInt(bDateMatch[0], 10) : 0;
      return aDate - bDate;
    });

    // Remove the oldest entries
    while (keys.length > MAX_CACHE_SIZE) {
      const oldestRequest = keys.find((request) => request.url === urls.shift());
      if (oldestRequest) {
        debug("Pruning asset from cache", oldestRequest.url);
        await cache.delete(oldestRequest);
      }
    }
  }
}

async function removeExpiredImages(): Promise<void> {
  const cache = await caches.open(IMAGE_CACHE);
  const keys = await cache.keys();

  const expirationPromises = keys.map(async (key) => {
    const response = await cache.match(key);
    if (response) {
      const dateHeader = response.headers.get("date");
      if (dateHeader) {
        const date = new Date(dateHeader);
        if (Date.now() - date.getTime() > IMAGE_CACHE_EXPIRATION) {
          debug("Removing expired image from cache", key.url);
          return cache.delete(key);
        }
      }
    }
  });

  await Promise.all(expirationPromises);
}

async function removeExpiredAssets(): Promise<void> {
  const cache = await caches.open(ASSET_CACHE);
  const keys = await cache.keys();

  const expirationPromises = keys.map(async (key) => {
    const response = await cache.match(key);
    if (response) {
      const dateHeader = response.headers.get("date");
      if (dateHeader) {
        const date = new Date(dateHeader);
        if (Date.now() - date.getTime() > ASSET_EXPIRATION_TIME) {
          debug("Removing expired asset from cache", key.url);
          return cache.delete(key);
        }
      }
    }
  });

  await Promise.all(expirationPromises);
}

function isMethod(request: Request, methods: string[]): boolean {
  return methods.includes(request.method.toLowerCase());
}

function isAssetRequest(request: Request): boolean {
  return (
    isMethod(request, ["get"]) &&
    STATIC_ASSETS.some((publicPath) => request.url.startsWith(publicPath))
  );
}

function isLoaderRequest(request: Request): boolean {
  const url = new URL(request.url);
  return isMethod(request, ["get"]) && url.searchParams.get("_data") !== null;
}

function isDocumentGetRequest(request: Request): boolean {
  return isMethod(request, ["get"]) && request.mode === "navigate";
}

function isImageRequest(request: Request): boolean {
  return request.destination === "image" || !!request.url.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i);
}

self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil(handleInstall(event).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil(handleActivate(event));
});

self.addEventListener("message", (event: ExtendableMessageEvent) => {
  event.waitUntil(handleMessage(event));
});

self.addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    handleFetch(event).catch((error) => {
      debug("Fetch failed", error);
      return new Response("Something went wrong", {
        status: 500,
        statusText: "Internal Server Error",
      });
    }),
  );
});
