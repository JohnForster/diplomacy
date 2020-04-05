const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

console.log(path.resolve(__dirname, "src/lib"));

module.exports = {
  entry: "./index.tsx",
  devtool: "source-map",
  mode: "production",
  //! Uncomment the below when working with express
  // target: 'node',
  // node: {
  //   // Need this when working with express, otherwise the build fails
  //   __dirname: false,   // if you don't put this is, __dirname
  //   __filename: false,  // and __filename return blank or /
  // },
  // externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      // {
      //   test: /\.m?js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      }
    ],
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat",
      "@shared": path.resolve(__dirname, "../shared/"),
      "@client": path.resolve(__dirname),
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../build/client"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: "./assets", to: "./assets" },
    ], {copyUnmodified: true}),
  ],
  devServer: {
    contentBase: path.join(process.cwd(), "build"),
    compress: true,
    port: 8083,
    host: "0.0.0.0",
  },
};
