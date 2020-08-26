const path = require("path");

module.exports = {
  source: "example",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./example/"),
      "@source": path.resolve(__dirname, "./src/"),
      "@library": path.resolve(__dirname, "./dist/")
    }
  }
};