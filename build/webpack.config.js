const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

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
    }),
    // new webpack.LoaderOptionsPlugin({
    //   options:{
    //     externals: {
    //       react: {
    //         commomjs: 'react',
    //         commomjs2: 'react',
    //         amd: 'react',
    //         root: 'React'
    //       },
    //       "react-dom":{
    //         commomjs: 'react-dom',
    //         commomjs2: 'react-dom',
    //         amd: 'react-dom',
    //         root: 'ReactDOM'
    //       }
    //     }
    //   }
    // })
  ],
  externals: {
    react: 'react',
    'react-dom':'ReactDOM'
  }
}