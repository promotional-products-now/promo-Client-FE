// import basicSsl from "@vitejs/plugin-basic-ssl";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import { RemixVitePWA } from "@vite-pwa/remix";
// const { RemixVitePWAPlugin, RemixPWAPreset } = RemixVitePWA();

import { remixPWA } from "@remix-pwa/dev";

installGlobals();

export default defineConfig({
  server: {
    port: 1338,
  },
  plugins: [
    // basicSsl(),
    remix({
      // presets: [RemixPWAPreset()],
      ignoredRouteFiles: ["**/.*", "**/*.css"],
      appDirectory: "app",
      buildDirectory: "build",

      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),

    // remixPWA(),

    tsconfigPaths(),
    // RemixVitePWAPlugin({
    //   registerType: "autoUpdate",
    //   // manifest: { display: "browser" },
    //   // devOptions: {
    //   //   enabled: true,
    //   //   type: "module",
    //   // },
    //   workbox: {
    //     runtimeCaching: [
    //       {
    //         urlPattern: /^https:\/\/api-prd\.promotionalproductsnow\.au\/api\/v1\/.*$/,
    //         handler: "StaleWhileRevalidate", // or 'CacheFirst' depending on your caching strategy
    //         options: {
    //           cacheName: "api-cache",
    //           expiration: {
    //             maxEntries: 50, // Maximum number of API responses to cache
    //             maxAgeSeconds: 60 * 60 * 96, // Cache for 4 day
    //           },
    //           cacheableResponse: {
    //             statuses: [0, 200], // Cache valid responses
    //           },
    //         },
    //       },
    //     ],
    //   },
    //   srcDir: "app",
    //   strategies: "injectManifest",
    //   // for testing purposes only
    //   base: "/",
    //   // for testing purposes only
    //   injectRegister: "auto",
    //   manifest: {
    //     name: "Remix PWA",
    //     short_name: "Remix PWA",
    //     theme_color: "#ffffff",
    //     start_url: "/",
    //     display: "standalone",
    //     icons: [
    //       {
    //         src: "pwa-64x64.png",
    //         sizes: "64x64",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-192x192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "pwa-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "maskable-icon-512x512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "maskable",
    //       },
    //     ],
    //     edge_side_panel: {
    //       preferred_width: 480,
    //     },
    //   },
    //   injectManifest: {
    //     globPatterns: ["**/*.{js,html,css,png,jpg,svg,ico}"],
    //     // for testing purposes only
    //     minify: false,
    //     // for testing purposes only
    //     enableWorkboxModulesLogs: true,
    //   },
    //   devOptions: {
    //     enabled: true,
    //     type: "module",
    //     suppressWarnings: true,
    //   },
    // }),
  ],
  define: {
    "process.env": process.env,
  },
});
