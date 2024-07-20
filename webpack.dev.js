const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [new BundleAnalyzerPlugin()],
  devtool: 'eval-cheap-module-source-map',
});
