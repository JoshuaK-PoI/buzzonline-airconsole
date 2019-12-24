const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function(env, argv) {
  return {
    entry: './ts/screen/buzzonline.ts',
    devtool: env.production ? 'none' : 'inline-source-map',
    mode: env.production ? 'production' : 'development',
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
    plugins: env.production ?[
        new TerserPlugin({
          sourceMap: !env.production
        })
    ] : [],
    output: {
      filename: env.production ? 'app.js' : 'app_development.js',
      path: path.resolve(__dirname, 'dist/js'),
    }
  }
}