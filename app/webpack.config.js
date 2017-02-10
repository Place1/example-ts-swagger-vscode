const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.tsx'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'source-map-loader',
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      include: path.join(__dirname, 'src'),
    }],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
  },
};
