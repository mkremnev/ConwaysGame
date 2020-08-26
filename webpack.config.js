const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		modules: ['node_modules', path.resolve(__dirname)],
		alias: {
			types: path.resolve(__dirname, 'src/lesson8/types'),
			components: path.resolve(__dirname, 'src/lesson8/components'),
			'@': path.resolve(__dirname, 'src'),
		},
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: './index.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/env'],
						},
					},
				],
			},
			// {
			// 	test: /\.s?css$/,
			// 	//TODO error for storybook,bugfix this later
			// 	exclude: /\.css$/,
			// 	use: [
			// 		'style-loader',
			// 		{ loader: 'css-loader', options: { modules: true } },
			// 		'postcss-loader',
			// 	],
			// },
			{
				test: /\.css$/,
				use: [
					'/root/mkremnev/project/netlinux/app-calc/node_modules/style-loader/dist/cjs.js',
					{
						loader:
							'/root/mkremnev/project/netlinux/app-calc/node_modules/@storybook/core/node_modules/css-loader/dist/cjs.js',
						options: { importLoaders: 1 },
					},
					{
						loader:
							'/root/mkremnev/project/netlinux/app-calc/node_modules/postcss-loader/src/index.js',
						options: {
							ident: 'postcss',
							postcss: {},
						},
					},
				],
			},
		],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
