const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  devtool: 'source-map',
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./src/main.pug"
    }),
    new ExtractTextPlugin({
      filename: "main.css",
      disable: false,
      allChunks: true
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: "./dist"
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: ["file-loader"]
      },
      {
        test: /\.pug$/,
        loader: ["html-loader", "pug-html-loader"]﻿
      }
    ]
  }
};
