const path = require('path');
module.exports = {
  entry: './coding_challenge/frontend/src/index.tsx',
  output: {
    path: path.join(__dirname, '/coding_challenge/frontend/static/frontend/'),
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}


