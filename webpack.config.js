const path = require('path');

module.exports = {
  entry: './src/main-bundle.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
