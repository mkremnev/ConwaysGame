/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
	comment:
		'This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/angular.md#angular',
	mutate: ['src/**/*.ts', '!src/**/*.test.tsx'],
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
