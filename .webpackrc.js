export default {
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }]
  ],
  env: {
    development: {
      extraBabelPlugins: ["dva-hmr"]
    },
    production: {
      extraBabelPlugins: [["transform-remove-console"]],
      publicPath: "/static/"
    }
  }
};
