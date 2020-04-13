const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge( common ,{
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    compress: true,
    overlay: {
      warnings: true,
      errors: true
    }, // show compiler error
    host: '127.0.0.1',
    port: 3000
  },
  module:{
    rules: [
      { 
        test:  /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader' 
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader:'css-loader',
            options:{
              import: true,
              sourceMap: true,
              url: true,
              modules: {
                localIdentName: '[path][local]_[hash:base64:5]',
              }
            }
          },
          'sass-loader'
        ],
        include: /\.module\.(sa|sc|c)ss$/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        exclude: /\.module\.(sa|sc|c)ss$/
      },
      {
        test: /\.(png|svg|jpg|gif|pdf)$/,
        exclude: /node_modules/, 
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            }
          }
        ]
      }
    ]
  }
});/* end module exports */
