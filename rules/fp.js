module.exports = {
	// https://github.com/jfmengels/eslint-plugin-fp
	plugins: ['fp'],

	rules: {
		'fp/no-arguments': 'error',
		'fp/no-class': 'off',
		'fp/no-delete': 'error',
		'fp/no-events': 'off',
		'fp/no-get-set': 'off',
		'fp/no-let': 'off',
		'fp/no-loops': 'warn',
		'fp/no-mutating-assign': 'warn',
		'fp/no-mutating-methods': 'off',
		'fp/no-mutation': 'off',
		'fp/no-nil': 'off',
		'fp/no-proxy': 'off',
		'fp/no-rest-parameters': 'off',
		'fp/no-this': 'off',
		'fp/no-throw': 'off',
		'fp/no-unused-expression': 'off',
		'fp/no-valueof-field': 'error',
		'no-var': 'off',
	},
};
