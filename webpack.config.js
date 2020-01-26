const path = require("path");
// const webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { index: "./index.tsx" },
  mode: "development",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build")
  },
  
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      chunks: ["index"]
    })
  ],
  devServer: {
    hot: true,
    contentBase: './build'
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }
};
