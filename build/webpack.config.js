const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode:'development', // production || development
  entry: {
    index:path.resolve(path.resolve(__dirname, '..'), 'dome'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'react-vant',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'react-vant',
      template: path.resolve(path.resolve(path.resolve(__dirname, '..'), 'dome'), 'index.html')
    })
  ]
}