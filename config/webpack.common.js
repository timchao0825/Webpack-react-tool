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
    // publicPath:'/',
  },
  resolve: {
    modules: [path.resolve('node_modules'), 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@css': path.resolve(__dirname, '../src/assets/css'),
      '@font': path.resolve(__dirname, '../src/assets/fonts'),
      '@images': path.resolve(__dirname, '../src/assets/images'),
      '@context':path.resolve(__dirname, '../src/context'),
      '@data':path.resolve(__dirname, '../src/data'),
    },
    extensions: [
      '.js','.jsx',
      '.css','.scss','.sass',
      '.ttf','.otf','.woff','.eot','.woff2',
      '.png','.jpg', '.gif','.jpeg'
    ]
  },
  performance: {
    hints: false
  }
}