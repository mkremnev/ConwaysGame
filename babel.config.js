module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: 'current' } }],
		'@babel/preset-react',
		'@babel/preset-typescript',
		[
			'@emotion/babel-preset-css-prop',
			{
				options: {
					autoLabel: true,
					labelFormat: '[local]',
					useBuiltIns: false,
					throwIfNamespace: true,
				},
			},
		],
	],
	plugins: [
		['@babel/plugin-proposal-class-properties'],
		['@babel/plugin-transform-runtime'],
	],
	env: {
		production: {
			plugins: ['emotion'],
		},
		development: {
			plugins: [['emotion', { sourceMap: true }]],
		},
	},
};
