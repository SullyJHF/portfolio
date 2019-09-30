const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/js/index.jsx',
  output: {
    path: path.join(__dirname, '/src/client/js/'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: ['babel-loader']
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  mode: process.env.NODE_ENV || 'development',
};
