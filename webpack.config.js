const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  //   watch: true,
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    watchFiles: ["src/*.html"],
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      //   title: "Development",
      template: "./src/template.html",
      cache: false,
      //   filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/Icons", to: "Icons" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
