const path = require('path');

module.exports = {
  entry: './ts/buzzonline_master.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist/js'),
  },
};