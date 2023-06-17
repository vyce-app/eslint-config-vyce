module.exports = Object.assign({}, require('../../react'), {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	}
});
