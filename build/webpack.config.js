const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  mode:'production', // production || development
  entry: {
    index:'./src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'react-vant',
    libraryTarget: 'umd'
    
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
      template: 'index.html'
    })
  ]
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js'],
  // }
}