const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const root_directory = path.join(__dirname, '..')
const src_directory = path.join(root_directory, 'src')


module.exports = {
  entry: [path.resolve(__dirname, '../src/App.js')],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(src_directory, 'index.html')
    }),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js',
  },
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules']
  },
  performance: {
    hints: false
  }
}