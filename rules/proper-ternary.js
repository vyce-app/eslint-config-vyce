
module.exports = {
	// https://github.com/getify/eslint-plugin-proper-ternary
	plugins: ['@getify/proper-ternary'],

	rules: {
		'@getify/proper-ternary/nested': 'error',
		'@getify/proper-ternary/parens': 'off',
		'@getify/proper-ternary/where': 'error'
	}
};
