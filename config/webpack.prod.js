const path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const common = require('./webpack.common.js')

module.exports = merge( common ,{
  mode: 'production',
  devtool: 'source-map',
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader:'css-loader',
            options:{
              import: true,
              sourceMap: true,
              url: true,
              modules: {
                localIdentName: '_[hash:base64:5]',
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
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
              name: '[contenthash].[ext]',
              outputPath: '../dist/assets/images'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin()
    ]
  }, 
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    })
  ],
});/* end module exports */
