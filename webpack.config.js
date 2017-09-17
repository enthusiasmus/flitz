var path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    './app/main.js',
    './app/main.sass'
  ],
  output: {
    filename: '[name].js',
    publicPath: 'dist',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                'debug': true
              }]
            ]
          }
        }
      }, {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        })
      }, {
        test: /\.(slm|slim)/,
        loader: 'slm'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new HtmlWebpackPlugin({
      title: 'Flitz',
      template: 'template.slim'
    })
  ]
}
