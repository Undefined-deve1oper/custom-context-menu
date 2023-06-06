const path = require("path");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  const isDev = !isProd;

  const filename = (ext) =>
    isProd ? `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`;

  return {
    context: path.resolve(__dirname, "src"),
    entry: {
      main: "./index.js",
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: filename("js"),
    },
  };
};
