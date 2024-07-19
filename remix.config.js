/** @type {import('@remix-run/dev').AppConfig} */
export default {
  tailwind: true,
  ignoredRouteFiles: ["**/.*", "**/*.css"],

  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  future: {
    /* any enabled future flags */
  },
  publicPath: "/build/",
  // routes(defineRoutes) {
  //   return defineRoutes((route) => {
  //     route("/somewhere/cool/*", "catchall.tsx");
  //   });
  // },
  serverBuildPath: "build/index.js",
};
