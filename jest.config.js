module.exports = {
	rootDir: './',
	coverageDirectory: 'coverage',
	verbose: true,
	bail: true,
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	cacheDirectory: 'tmp/test',
	moduleDirectories: ['node_modules', 'src'],
	testEnvironment: 'jsdom',
};
