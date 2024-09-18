// import basicSsl from "@vitejs/plugin-basic-ssl";
import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { RemixVitePWA } from "@vite-pwa/remix";
const { RemixVitePWAPlugin, RemixPWAPreset } = RemixVitePWA();

// import { remixPWA } from "@remix-pwa/dev";

installGlobals();

export default defineConfig({
  server: {
    port: 1338,
  },
  plugins: [
    // basicSsl(),
    remix({
      presets: [RemixPWAPreset()],
      ignoredRouteFiles: ["**/.*", "**/*.css"],
      appDirectory: "app",
      buildDirectory: "build",

      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    RemixVitePWAPlugin({
      registerType: "autoUpdate",
      manifest: { display: "browser" },
      devOptions: {
        enabled: true,
        type: "module",
      },
    }),
    // remixPWA(),

    tsconfigPaths(),
  ],
  define: {
    "process.env": process.env,
  },
});
