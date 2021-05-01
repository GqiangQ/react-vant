const path = require('path')

module.exports = {
  mode:'production', // production || development
  entry: {
    index:'./src/index.tsx',
  },
  output: {
    path: path.resolve(path.resolve(__dirname, '..'), 'dist'),
    library: 'react-vant',
    libraryTarget: 'umd'
    
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
  ],
  externals: {
    react: 'react',
    'react-dom':'ReactDOM'
  }
}