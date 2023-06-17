module.exports = {
	root: true,

	env: {
		node: true,
		jest: true,
	},

	parserOptions: {
		sourceType: 'module',
	},

	extends: './node',

	plugins: ['sonarjs', 'filenames'],

	rules: {
		'max-len': 'off',
		'max-lines': 'off',
		'no-magic-numbers': 'off',
		'sonarjs/no-duplicate-string': 'off',
		'filenames/match-exported': ['error', 'kebab'],
	},

	overrides: [
		{
			files: ['*.spec.js', '*.config.js'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
				'n/no-extraneous-require': 'off',
				'n/global-require': 'off',
			},
		},
	],
};
