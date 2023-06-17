const reactConfig = require('../../react');

module.exports = {
	...reactConfig,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
};
