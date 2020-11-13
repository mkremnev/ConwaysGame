const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			types: path.resolve(__dirname, 'src/types'),
			components: path.resolve(__dirname, 'src/components'),
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
			{
				test: /\.css$/,
				exclude: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { modules: true } },
				],
			},
			{
				test: /\.(jpg|png|svg)$/,
				use: {
					loader: 'url-loader',
					options: { name: './src/assets/[name].[ext]' },
				},
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		contentBase: ['./dist', path.join(__dirname, './src/assets')],
		port: 5000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
