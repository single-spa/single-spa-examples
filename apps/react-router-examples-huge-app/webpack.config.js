var webpack = require('webpack')

module.exports = {
  entry: {
    app: "./app.js"
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/build',
    filename: 'app.bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: 'build/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ]
}
