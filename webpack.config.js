const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'awesome.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};