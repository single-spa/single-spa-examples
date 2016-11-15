var webpack = require('webpack');

module.exports = {
	devtool: 'inline-devtool',
	entry: {
		'react.app': './react.app.js',
	},
	output: {
		libraryTarget: 'amd',
		path: process.cwd() + '/build',
		filename: '[name].js',
		chunkFilename: 'react-[id].chunk.js',
		publicPath: '/build/',
	},
	externals: {
		react: 'react',
		'react-dom': 'react-dom',
		'common/colored-border.js': 'common/colored-border.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-object-rest-spread'],
				},
			},
			{
				test: /\.css$/,
				loader: 'style!css',
			},
		],
	},
	context: __dirname,
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('shared.js'),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
		}),
	],
}
