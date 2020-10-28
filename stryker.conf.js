/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
	mutate: ['!src/**/*.ts', 'src/**/*.test.tsx'],
	mutator: 'typescript',
	testRunner: 'jest',
	coverageAnalysis: 'off',
	jest: {
		projectType: 'custom',
		configFile: './jest.config.js',
		enableFindRelatedTests: true,
	},
	tsconfigFile: 'tsconfig.json',
	packageManager: 'npm',
};
