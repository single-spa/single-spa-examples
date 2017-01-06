var webpack = require('webpack');

module.exports = {
	devtool: 'sourcemaps',
	entry: {
		'inferno.app': './inferno.app.js',
	},
	output: {
		libraryTarget: 'amd',
		path: process.cwd() + '/build',
		filename: '[name].js',
		chunkFilename: 'inferno-[id].chunk.js',
		publicPath: '/build/',
	},
	externals: {
		'common/colored-border.js': 'common/colored-border.js',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015'],
					plugins: ['transform-object-rest-spread', 'transform-react-jsx', 'inferno'],
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
	],
}
