/** @type {import('@remix-run/dev').AppConfig} */
export default {
  tailwind: true,
  ignoredRouteFiles: ["**/.*"],

  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  future: {
    /* any enabled future flags */
  },
  ignoredRouteFiles: ["**/*.css"],
  publicPath: "/build/",
  // routes(defineRoutes) {
  //   return defineRoutes((route) => {
  //     route("/somewhere/cool/*", "catchall.tsx");
  //   });
  // },
  serverBuildPath: "build/index.js",
};
