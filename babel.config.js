module.exports = {
	presets: [
		['@babel/preset-env', { targets: 'defaults' }],
		'@babel/preset-typescript',
		'@babel/preset-react',
	],
	plugins: ['@babel/plugin-proposal-class-properties'],
	env: {
		production: {
			plugins: ['emotion'],
		},
		development: {
			plugins: [['emotion', { sourceMap: true }]],
		},
	},
};
