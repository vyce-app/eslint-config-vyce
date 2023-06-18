module.exports = {
	env: {
		node: true,
	},

	extends: ['plugin:n/recommended'],

	plugins: ['n'],

	rules: {
		// enforce return after a callback
		'callback-return': 'off',

		/*
		 * require all requires be top-level
		 * This rule was deprecated in ESLint v7.0.0. Please use the corresponding rule in eslint-plugin-n
		 * https://eslint.org/docs/rules/global-require
		 */
		'global-require': 'off',

		/*
		 * Require require() calls to be placed at top-level module scope (n/global-require)
		 * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/global-require.md
		*/
		'n/global-require': 'error',

		// enforces error handling in callbacks (node environment)
		'handle-callback-err': 'off',

		/*
		 * disallow use of the Buffer() constructor
		 * This rule was deprecated in ESLint v7.0.0. Please use the corresponding rule in eslint-plugin-n
		 * https://eslint.org/docs/rules/no-buffer-constructor
		 */
		'no-buffer-constructor': 'off',

		// disallow mixing regular variable and require declarations
		'no-mixed-requires': ['off', false],

		/* disallow use of new operator with the require function
		 * This rule was deprecated in ESLint v7.0.0. Please use the corresponding rule in eslint-plugin-n.
		 * https://eslint.org/docs/latest/rules/no-new-require
		 */
		'no-new-require': 'off',

		/*
		 * Disallow new operators with calls to require (n/no-new-require)
		 * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-new-require.md
		*/
		'n/no-new-require': 'error',

		/*
		 * Disallow require() expressions which import private modules (n/no-unpublished-require)
		 * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-unpublished-require.md
		 */
		'n/no-unpublished-require': 'off',

		/*
		 * disallow string concatenation with __dirname and __filename
		 * This rule was deprecated in ESLint v7.0.0. Please use the corresponding rule in eslint-plugin-n.
		 * https://eslint.org/docs/rules/no-path-concat
		 */
		'no-path-concat': 'off',

		/*
		 * Disallow string concatenation with __dirname and __filename (n/no-path-concat)
		*/
		'n/no-path-concat': 'error',

		/* disallow use of process.env
		* This rule was deprecated in ESLint v7.0.0. Please use the corresponding rule in eslint-plugin-n.
		* https://eslint.org/docs/rules/no-process-env
		*/
		'no-process-env': 'off',

		/*
		 * Disallow use of process.env (n/no-process-env)
		 * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-env.md
		 */
		'n/no-process-env': 'off',

		/* disallow process.exit()
		 * This rule was deprecated in ESLint v7.0.0. Please use the corresponding rule in eslint-plugin-n.
		 * https://eslint.org/docs/rules/no-process-exit
		 */
		'no-process-exit': 'off',

		/*
		 * Disallow process.exit() (n/no-process-exit)
		 * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-process-exit.md
		 */
		'n/no-process-exit': 'error',

		/* restrict usage of specified node modules
		 * This rule was deprecated in ESLint v7.0.0. Please use the corresponding rule in eslint-plugin-n
		 * https://eslint.org/docs/rules/no-restricted-modules
		 */
		'no-restricted-modules': 'off',

		/*
		 * Disallow specified modules when loaded by require (n/no-restricted-require)
		 * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-restricted-require.md
		 */
		'n/no-restricted-require': 'off',

		/* disallow use of synchronous methods (off by default)
		 * https://eslint.org/docs/rules/no-sync
		 */
		'no-sync': 'off',

		/*
		 * Disallow import declarations which import non-existence modules (n/no-missing-import)
		 * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-missing-import.md
		 * Turned off because eslint-plugin-import handles import errors
		 */
		'n/no-missing-import': 'off',

		/*
		 * Disallow import declarations which import extraneous modules (n/no-extraneous-import)
		 * https://github.com/eslint-community/eslint-plugin-n/blob/master/docs/rules/no-extraneous-import.md
		 * Turned off because eslint-plugin-import handles import errors
		 */
		'n/no-extraneous-import': 'off',
	},
};
