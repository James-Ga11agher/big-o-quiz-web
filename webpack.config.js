const HTMLWebpackPlugin = require('html-webpack-plugin');
let HTMLWebpackPluginConfigured = new HTMLWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  target: 'web',
  entry: __dirname + '/src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        exclude: /node_modules/
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/'
  },
  plugins: [HTMLWebpackPluginConfigured]
};
