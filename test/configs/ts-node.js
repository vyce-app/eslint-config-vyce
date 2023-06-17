module.exports = Object.assign({}, require('../../ts-node'), {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	}
});
