const path = require('path');

module.exports = {
  entry: './js/main-bundle.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
