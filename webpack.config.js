const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  mode: devMode ? "development" : "production",
  devServer: {
    hot: true,
    historyApiFallback: true,
    client: {
      logging: "error",
      overlay: true,
    },
  },
  devtool: devMode && 'eval-cheap-module-source-map',
  entry: ["./src/index.jsx"],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            plugins: [devMode && 'react-refresh/babel'].filter(Boolean),
          }
        },
      },
      {
        // If you enable `experiments.css` or `experiments.futureDefaults`, please uncomment line below
        // type: "javascript/auto",
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: 'asset/resource'
      },
    ],
  },
  plugins: [
    devMode && new ReactRefreshPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
    }),
  ].filter(Boolean),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    // publicPath: 'auto'
  }
};