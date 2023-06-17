module.exports = {
	root: true,

	env: {
		node: true,
		vitest: true,
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
};
