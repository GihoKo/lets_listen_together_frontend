var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dotenv = require('dotenv-webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
var { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
var ProgressPlugin = require('progress-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js', // 번들된 파일의 이름
    path: path.resolve(__dirname, 'dist'), // 번들된 파일 저장 경로
    publicPath: '/', // 번들 파일이 제공될 URL 경로
    chunkFilename: '[name].bundle.js', // 동적 임포트된 청크 파일 이름
    assetModuleFilename: 'images/[hash][ext][query]', // 자산 파일 이름 형식(이미지, 폰트 등)
    clean: true, // 이전 빌드 결과물 삭제
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 마지막 프리셋부터 거꾸로 실행
          presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/icon-192x192.png', to: 'icon-192x192.png' },
        { from: 'public/icon-512x512.png', to: 'icon-512x512.png' },
        { from: 'public/manifest.json', to: 'manifest.json' },
      ],
    }),
    new Dotenv({
      path: './.env.local',
    }),
    new BundleAnalyzerPlugin(),
    new ProgressPlugin(),
  ],
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
};
