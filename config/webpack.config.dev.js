const path = require('path')
const config = require('./webpack.config.js')

config.mode = 'development';
config.devServer = {
  // historyApiFallback: true,
  contentBase: path.join(__dirname, '../build'),
  hot: true,
  compress: true,
  // open: true,
  overlay: {
    warnings: true,
    errors: true
  }, // show compiler error
  host: '127.0.0.1',
  port: 3000
}

config.devtool = 'inline-source-map'

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
        'file-loader'
      ]
    }
  ]
}


module.exports = config