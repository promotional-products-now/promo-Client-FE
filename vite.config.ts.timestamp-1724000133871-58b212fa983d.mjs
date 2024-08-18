// vite.config.ts
import { vitePlugin as remix } from "file:///home/nnanna75/Documents/my-code/ppn/promo-Client-FE/node_modules/@remix-run/dev/dist/index.js";
import { installGlobals } from "file:///home/nnanna75/Documents/my-code/ppn/promo-Client-FE/node_modules/@remix-run/node/dist/index.js";
import { defineConfig } from "file:///home/nnanna75/Documents/my-code/ppn/promo-Client-FE/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///home/nnanna75/Documents/my-code/ppn/promo-Client-FE/node_modules/vite-tsconfig-paths/dist/index.js";
installGlobals();
var vite_config_default = defineConfig({
  server: {
    port: 3e3
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ubmFubmE3NS9Eb2N1bWVudHMvbXktY29kZS9wcG4vcHJvbW8tQ2xpZW50LUZFXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ubmFubmE3NS9Eb2N1bWVudHMvbXktY29kZS9wcG4vcHJvbW8tQ2xpZW50LUZFL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL25uYW5uYTc1L0RvY3VtZW50cy9teS1jb2RlL3Bwbi9wcm9tby1DbGllbnQtRkUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyBpbnN0YWxsR2xvYmFscyB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xuXG5pbnN0YWxsR2xvYmFscygpO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgcmVtaXgoe1xuICAgICAgZnV0dXJlOiB7XG4gICAgICAgIHYzX2ZldGNoZXJQZXJzaXN0OiB0cnVlLFxuICAgICAgICB2M19yZWxhdGl2ZVNwbGF0UGF0aDogdHJ1ZSxcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdHNjb25maWdQYXRocygpLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThVLFNBQVMsY0FBYyxhQUFhO0FBQ2xYLFNBQVMsc0JBQXNCO0FBQy9CLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sbUJBQW1CO0FBRTFCLGVBQWU7QUFFZixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
