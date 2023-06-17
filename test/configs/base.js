module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		node: true,
		browser: true,
	},
	parserOptions: {
		ecmaVersion: 2023,
	},
	extends: ['eslint:recommended'],
	rules: {
		'no-unused-vars': 'off',
	},
};
