const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.LoaderOptionsPlugin({ options: {} }),
    // HtmlWebpackPluginConfig,
    // new HtmlWebpackPlugin({
    //   title: 'issue',
    //   filename: './public/index.html',
    //   inject: true,
    //   hash: true,
    //   xhtml: true,
    //   template: './public/index.ejs',
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
  },
};

