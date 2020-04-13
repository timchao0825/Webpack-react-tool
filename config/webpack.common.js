const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const root_directory = path.join(__dirname, '..')
const src_directory = path.join(root_directory, 'src')


module.exports = {
  entry: [path.resolve(__dirname, '../src/App.js')],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(src_directory, 'index.html')
    }),
    // new CopyWebpackPlugin([
    //   { 
    //     from: path.join(src_directory, 'assets'), 
    //     to: path.join(root_directory, 'dist') 
    //   }
    // ]),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules']
  },
  performance: {
    hints: false
  }
}