/// <reference lib="WebWorker" />

export {};

declare let self: ServiceWorkerGlobalScope;

const CACHE_NAME = "api-cache-v1";

self.addEventListener("install", (event) => {
  console.log("Service worker installed");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          }),
        );
      })
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Cache the specific API requests
  if (
    url.pathname.includes("/blog/category") ||
    url.pathname.includes("/api/products/product-show-case")
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      }),
    );
  }
});
