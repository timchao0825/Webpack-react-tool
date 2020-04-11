const path = require('path')
const config = require('./webpack.config.js')

config.devServer = {
  historyApiFallback: true,
  contentBase: path.join(__dirname, '../build'),
  hot: true,
  compress: true,
  open: true,
  overlay: {
    warnings: true,
    errors: true
  }, // show compiler error
  host: '127.0.0.1',
  port: 3000
}

config.devtool = 'inline-source-map'

module.exports = config