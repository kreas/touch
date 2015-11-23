/* global __dirname */
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.jsx',

  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  module: {
    loaders: [
      { test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.scss$/,
        loader: 'style!css!sass!autoprefixer-loader'
      }
    ]
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx']
  }
}
