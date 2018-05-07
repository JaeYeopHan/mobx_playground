const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
	mode: 'development',

	entry: {
		'bundle': './src/index.ts',
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [{
			test: /\.tsx?$/,
			exclude: /(node_modules)/,
			loader: 'awesome-typescript-loader'
		}]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new CleanWebpackPlugin([
			'dist'
		]),
		new DashboardPlugin(),
	]
};