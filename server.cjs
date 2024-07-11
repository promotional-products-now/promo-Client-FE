const path = require("path");
const { createApp } = require("@remix-run/serve");
const { serverBuildDirectory } = require("./remix.config");

(function () {
  const buildPath = path.resolve(process.cwd(), serverBuildDirectory);

  const app = createApp(buildPath);
  const port = 8080;

  app.listen(port, () => {
    // eslint-disable-next-line
    console.log(`Web client server started at http://localhost:${port}`);
  });
})();
