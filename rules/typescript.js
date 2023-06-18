module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: { sourceType: 'module' },
	plugins: ['@typescript-eslint'],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/eslint-recommended',
			],
			rules: {
				// Recommended
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				'@typescript-eslint/ban-ts-comment': 'error',
				'@typescript-eslint/ban-types': 'error',
				'no-array-constructor': 'off',
				'@typescript-eslint/no-array-constructor': 'error',
				'no-empty-function': 'off',
				'@typescript-eslint/no-empty-function': 'error',
				'@typescript-eslint/no-empty-interface': 'error',
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-extra-non-null-assertion': 'error',
				'no-extra-semi': 'off',
				'@typescript-eslint/no-extra-semi': 'error',
				'@typescript-eslint/no-inferrable-types': 'error',
				'no-loss-of-precision': 'off',
				'@typescript-eslint/no-loss-of-precision': 'error',
				'@typescript-eslint/no-misused-new': 'error',
				'@typescript-eslint/no-namespace': 'error',
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-this-alias': 'error',
				'@typescript-eslint/no-unnecessary-type-constraint': 'error',
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						argsIgnorePattern: '^_',
						varsIgnorePattern: '^_',
						caughtErrorsIgnorePattern: '^_',
					},
				],
				'@typescript-eslint/no-var-requires': 'error',
				'@typescript-eslint/prefer-as-const': 'error',
				'@typescript-eslint/prefer-namespace-keyword': 'error',
				'@typescript-eslint/triple-slash-reference': 'error',

				// Recommended requiring type checking
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/no-floating-promises': 'error',
				'@typescript-eslint/no-for-in-array': 'error',
				'no-implied-eval': 'off',
				'@typescript-eslint/no-implied-eval': 'error',
				'@typescript-eslint/no-misused-promises': ['error', {
					checksVoidReturn: {
						attributes: false,
					},
				}],
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',
				'@typescript-eslint/no-unsafe-argument': 'error',
				'@typescript-eslint/no-unsafe-assignment': 'error',
				'@typescript-eslint/no-unsafe-call': 'error',
				'@typescript-eslint/no-unsafe-member-access': 'error',
				'@typescript-eslint/no-unsafe-return': 'error',
				'require-await': 'off',
				'@typescript-eslint/require-await': 'off',
				'@typescript-eslint/restrict-plus-operands': 'error',
				'@typescript-eslint/restrict-template-expressions': 'error',
				'@typescript-eslint/unbound-method': ['error', {
					ignoreStatic: true,
				}],

				// Strict
				'@typescript-eslint/array-type': 'warn',
				'@typescript-eslint/ban-tslint-comment': 'warn',
				'@typescript-eslint/class-literal-property-style': 'warn',
				'@typescript-eslint/consistent-generic-constructors': 'warn',
				'@typescript-eslint/consistent-indexed-object-style': 'warn',
				'@typescript-eslint/consistent-type-assertions': 'warn',
				'@typescript-eslint/consistent-type-definitions': 'off',
				'dot-notation': 'off',
				'@typescript-eslint/dot-notation': 'warn',
				'@typescript-eslint/no-base-to-string': 'warn',
				'@typescript-eslint/no-confusing-non-null-assertion': 'warn',
				'@typescript-eslint/no-duplicate-enum-values': 'warn',
				'@typescript-eslint/no-dynamic-delete': 'warn',
				'@typescript-eslint/no-extraneous-class': 'off',
				'@typescript-eslint/no-invalid-void-type': 'warn',
				'@typescript-eslint/no-meaningless-void-operator': 'warn',
				'@typescript-eslint/no-mixed-enums': 'warn',
				'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
				'no-throw-literal': 'off',
				'@typescript-eslint/no-throw-literal': 'warn',
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
				'@typescript-eslint/no-unnecessary-condition': 'warn',
				'@typescript-eslint/no-unnecessary-type-arguments': 'warn',
				'@typescript-eslint/no-unsafe-declaration-merging': 'warn',
				'@typescript-eslint/no-unsafe-enum-comparison': 'warn',
				'no-useless-constructor': 'off',
				'@typescript-eslint/no-useless-constructor': 'warn',
				'@typescript-eslint/non-nullable-type-assertion-style': 'warn',
				'@typescript-eslint/prefer-for-of': 'warn',
				'@typescript-eslint/prefer-function-type': 'warn',
				'@typescript-eslint/prefer-includes': 'warn',
				'@typescript-eslint/prefer-literal-enum-member': 'warn',
				'@typescript-eslint/prefer-nullish-coalescing': 'warn',
				'@typescript-eslint/prefer-optional-chain': 'warn',
				'@typescript-eslint/prefer-reduce-type-parameter': 'warn',
				'@typescript-eslint/prefer-return-this-type': 'warn',
				'@typescript-eslint/prefer-string-starts-ends-with': 'warn',
				'@typescript-eslint/prefer-ts-expect-error': 'warn',
				'@typescript-eslint/unified-signatures': 'warn',

				// Everything else
				'block-spacing': 'off',
				'@typescript-eslint/block-spacing': 'error',
				'brace-style': 'off',
				'@typescript-eslint/brace-style': 'error',
				'comma-dangle': 'off',
				'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
				'comma-spacing': 'off',
				'@typescript-eslint/comma-spacing': ['error', {
					before: false, after: true,
				}],
				'@typescript-eslint/consistent-type-exports': 'error',
				'@typescript-eslint/consistent-type-imports': 'error',
				'default-param-last': 'off',
				'@typescript-eslint/default-param-last': 'error',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/explicit-member-accessibility': 'error',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'func-call-spacing': 'off',
				'@typescript-eslint/func-call-spacing': 'error',
				indent: 'off',
				'@typescript-eslint/indent': [
					'error',
					'tab',
					{
						SwitchCase: 1,
						VariableDeclarator: 1,
						outerIIFEBody: 1,
						MemberExpression: 1,
						FunctionDeclaration: {
							parameters: 1,
							body: 1,
						},
						FunctionExpression: {
							parameters: 1,
							body: 1,
						},
						CallExpression: {
							arguments: 1,
						},
						ArrayExpression: 1,
						ObjectExpression: 1,
						// ImportDeclaration: 1,
						flatTernaryExpressions: false,
						offsetTernaryExpressions: true,
						ignoredNodes: [
							'TSTypeParameterInstantiation',
							'TSTypeParameterDeclaration',
							'TSIntersectionType',
							'TSUnionType',
							'PropertyDefinition[decorators]',
							'FunctionExpression[params]:has(Identifier[decorators])',
						],
					},
				],
				'init-declarations': 'off',
				'@typescript-eslint/init-declarations': 'off',
				'key-spacing': 'off',
				'@typescript-eslint/key-spacing': 'error',
				'keyword-spacing': 'off',
				'@typescript-eslint/keyword-spacing': 'error',
				'lines-around-comment': 'off',
				'@typescript-eslint/lines-around-comment': 'error',
				'lines-between-class-members': 'off',
				'@typescript-eslint/lines-between-class-members': 'error',
				'@typescript-eslint/member-delimiter-style': 'error',
				'@typescript-eslint/member-ordering': 'error',
				'@typescript-eslint/method-signature-style': 'error',
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'default',
						format: ['camelCase'],
					},
					{
						selector: 'variable',
						format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'parameter',
						format: ['camelCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'memberLike',
						modifiers: ['private'],
						format: ['camelCase'],
						leadingUnderscore: 'allow',
					},
					{
						selector: [
							'classProperty',
							'objectLiteralProperty',
							'typeProperty',
						],
						format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
						leadingUnderscore: 'allow',
					},
					{
						selector: 'typeLike',
						format: ['PascalCase'],
					},
					{
						selector: 'function',
						format: ['PascalCase', 'camelCase'],
					},
					{
						selector: 'enumMember',
						format: ['PascalCase', 'UPPER_CASE'],
					},
					{
						selector: [
							'classProperty',
							'objectLiteralProperty',
							'typeProperty',
							'classMethod',
							'objectLiteralMethod',
							'typeMethod',
							'accessor',
							'enumMember',
						],
						format: null,
						modifiers: ['requiresQuotes'],
					},
				],
				'@typescript-eslint/no-confusing-void-expression': 'error',
				'no-dupe-class-members': 'off',
				'@typescript-eslint/no-dupe-class-members': 'error',
				'@typescript-eslint/no-duplicate-type-constituents': 'error',
				'no-extra-parens': 'off',
				'@typescript-eslint/no-extra-parens': 'error',
				'@typescript-eslint/no-import-type-side-effects': 'error',
				'no-invalid-this': 'off',
				'@typescript-eslint/no-invalid-this': 'error',
				'no-loop-func': 'off',
				'@typescript-eslint/no-loop-func': 'error',
				'no-magic-numbers': 'off',
				'@typescript-eslint/no-magic-numbers': [
					'error',
					{
						ignore: [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 60, 100, 150, 200, 250, 300, 500, 1000],
						ignoreArrayIndexes: true,
						ignoreDefaultValues: true,
						ignoreEnums: true,
						ignoreNumericLiteralTypes: true,
						ignoreReadonlyClassProperties: true,
					},
				],
				'no-redeclare': 'off',
				'@typescript-eslint/no-redeclare': 'error',
				'@typescript-eslint/no-redundant-type-constituents': 'error',
				'@typescript-eslint/no-require-imports': 'error',
				'no-restricted-imports': 'off',
				'@typescript-eslint/no-restricted-imports': 'error',
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': 'error',
				'@typescript-eslint/no-type-alias': 'off',
				'@typescript-eslint/no-unnecessary-qualifier': 'error',
				'no-unused-expressions': 'off',
				'@typescript-eslint/no-unused-expressions': 'error',
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': 'error',
				'@typescript-eslint/no-useless-empty-export': 'error',
				'object-curly-spacing': 'off',
				'@typescript-eslint/object-curly-spacing': ['error', 'always'],
				'padding-line-between-statements': 'off',
				'@typescript-eslint/padding-line-between-statements': 'error',
				'@typescript-eslint/parameter-properties': 'off',
				'@typescript-eslint/prefer-enum-initializers': 'error',
				'@typescript-eslint/prefer-readonly': 'error',
				'@typescript-eslint/prefer-readonly-parameter-types': 'off',
				'@typescript-eslint/prefer-regexp-exec': 'error',
				'@typescript-eslint/promise-function-async': 'error',
				quotes: 'off',
				'@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
				'@typescript-eslint/require-array-sort-compare': 'error',
				'no-return-await': 'off',
				'@typescript-eslint/return-await': 'error',
				semi: 'off',
				'@typescript-eslint/semi': [
					'error',
					'always',
				],
				'@typescript-eslint/sort-type-constituents': 'error',
				'space-before-blocks': 'off',
				'@typescript-eslint/space-before-blocks': 'error',
				'space-before-function-paren': 'off',
				'@typescript-eslint/space-before-function-paren': 'off',
				'space-infix-ops': 'off',
				'@typescript-eslint/space-infix-ops': 'error',
				'@typescript-eslint/strict-boolean-expressions': 'off',
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
				'@typescript-eslint/type-annotation-spacing': 'error',
				'@typescript-eslint/typedef': 'error',
			},
		},
	],
};
