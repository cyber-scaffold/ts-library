const path = require("path");

module.exports = {
  source: "example",
  exclude: [/node_modules/, /dist/],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./example/"),
      "@source": path.resolve(__dirname, "./src/"),
      "@library": path.resolve(__dirname, "./dist/")
    }
  }
};