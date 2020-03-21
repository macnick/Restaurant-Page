const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   title: 'Output Management'
    // })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.exec\.js$/,
        use: ['script-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
      //     {
      //       test: /\.(csv|tsv)$/,
      //       use: [
      //         'csv-loader',
      //       ],
      //     },
      //     {
      //       test: /\.xml$/,
      //       use: [
      //         'xml-loader',
      //       ],
      //     },
      //     {
      //       test: /\.m?js$/,
      //       exclude: /(node_modules|bower_components)/,
      //       use: {
      //         loader: 'babel-loader',
      //         options: {
      //           presets: ['@babel/preset-env']
      //         }
      //       }
      //     }
    ]
  }
};
