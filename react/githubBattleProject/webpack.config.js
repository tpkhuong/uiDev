var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  //   using webpack dev server it will not make a dist folder for us. everything we do will be cached
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath works with devServer: historyApiFallback
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  mode: "development",
  devServer: {
    // look at output: {publicPath: "/"}
    historyApiFallback: true,
  },
};
