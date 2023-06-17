const tsNodeConfig = require('../../ts-node');

module.exports = {
	...tsNodeConfig,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
};
