module.exports = {
	// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore/
	plugins: ['you-dont-need-lodash-underscore'],

	extends: ['plugin:you-dont-need-lodash-underscore/compatible'],

	rules: {
		'you-dont-need-lodash-underscore/get': 'off',
	}
};
