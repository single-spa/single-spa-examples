const webpack = require('webpack');
const path = require('path');
const lodash = require('lodash');

const infernoBabelConfig = getBabelConfig();
infernoBabelConfig.plugins.push('inferno');

const preactBabelConfig = getBabelConfig();
preactBabelConfig.presets.splice(0, 1);
preactBabelConfig.plugins.push(['transform-react-jsx', {pragma: 'h'}])

module.exports = {
  entry: __dirname + '/src/single-spa-examples.js',
  output: {
    path: process.cwd() + '/build',
    filename: '[name].js',
    publicPath: '/build/',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    publicPath: '/build/',
    contentBase: './',
    historyApiFallback: {
      index: '200.html',
    },
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "./"),
    ],
    alias: {
      'single-spa': path.resolve(__dirname, 'node_modules/single-spa/lib/single-spa.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /inferno.+\.js$/,
        loader: 'babel-loader',
        query: infernoBabelConfig,
      },
      {
        test: /preact.+\.js$/,
        loader: 'babel-loader',
        query: preactBabelConfig,
      },
      {
        test: /\.html$/,
        exclude: /node_modules|svelte/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules|inferno|preact/,
        loader: 'babel-loader',
        query: getBabelConfig(),
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /svelte.+\.html$/,
        loader: 'svelte-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './src')),
  ],
};

function getBabelConfig() {
  return {
    presets: [
      'react',
      ['babel-preset-env', {
        targets: {
          "browsers": ["last 2 versions"],
        },
      }],
    ],
    plugins: [
      'transform-object-rest-spread',
      'transform-class-properties',
      'syntax-dynamic-import',
      'transform-function-bind',
    ],
  };
}
