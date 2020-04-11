const config = require('./webpack.config.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

config.mode = 'production';

config.optimization = {
  splitChunks: {
    chunks: 'all'
  }
}

config.plugins = config.plugins.concat([
  new UglifyJsPlugin({
    sourceMap: true,
    extractComments: true
  })
])

config.module = {
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
        {
          loader:'style-loader'
        },
        {
          loader:'css-loader',
        },
        {
          loader:'sass-loader',
        }
      ]
    },
    {
      test: /\.(png|svg|jpg|gif|pdf)$/,
      exclude: /node_modules/, 
      use: [
        'file-loader'
      ]
    }
  ]
}

module.exports = config
