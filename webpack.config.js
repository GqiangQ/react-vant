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
  // resolve: {
  //   extensions: ['.tsx', '.ts', '.js'],
  // }
}