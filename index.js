module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/style',
		'./rules/variables',
		'./rules/es6',
		'./rules/imports',
		'./rules/strict',
		'./rules/sonar',
		'./rules/underscore',
		'./rules/fp',
		'./rules/proper-ternary',
	].map(require.resolve),
};
