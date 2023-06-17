module.exports = {
	rules: {
		/*
		 * Enforce line breaks after opening and before closing array brackets
		 * Object option alternative: { multiline: true, minItems: 3 }
		 * https://eslint.org/docs/rules/array-bracket-newline
		 */
		'array-bracket-newline': ['off', 'consistent'],

		/*
		 * Enforce line breaks between array elements
		 * https://eslint.org/docs/rules/array-element-newline
		 */
		'array-element-newline': ['off', {
			multiline: true, minItems: 3
		}],

		/*
		 * Enforce spacing inside array brackets
		 * https://eslint.org/docs/rules/array-bracket-spacing
		 */
		'array-bracket-spacing': ['error', 'never'],

		/*
		 * Enforce spacing inside single-line blocks
		 * https://eslint.org/docs/rules/block-spacing
		 */
		'block-spacing': ['error', 'always'],

		/*
		 * Enforce one true brace style
		 * https://eslint.org/docs/rules/brace-style
		 */
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],

		/*
		 * Require camel case names
		 * https://eslint.org/docs/rules/camelcase
		 */
		camelcase: ['error', {
			properties: 'never', ignoreDestructuring: true
		}],

		/*
		 * Enforce or disallow capitalization of the first letter of a comment
		 * https://eslint.org/docs/rules/capitalized-comments
		 */
		'capitalized-comments': [
			'off',
			'never',
			{
				line: {
					ignorePattern: '.*',
					ignoreInlineComments: true,
					ignoreConsecutiveComments: true
				},
				block: {
					ignorePattern: '.*',
					ignoreInlineComments: true,
					ignoreConsecutiveComments: true
				}
			}
		],

		/*
		 * Require or disallow trailing commas
		 * https://eslint.org/docs/rules/comma-dangle
		 */
		'comma-dangle': ['error', 'always-multiline'],

		/*
		 * Enforces spacing around commas
		 * https://eslint.org/docs/rules/comma-spacing
		 */
		'comma-spacing': ['error', {
			before: false, after: true
		}],

		/*
		 * Enforce one true comma style
		 * https://eslint.org/docs/rules/comma-style
		 */
		'comma-style': [
			'error',
			'last',
			{
				exceptions: {
					ArrayExpression: false,
					ArrayPattern: false,
					ArrowFunctionExpression: false,
					CallExpression: false,
					FunctionDeclaration: false,
					FunctionExpression: false,
					ImportDeclaration: false,
					ObjectExpression: false,
					ObjectPattern: false,
					VariableDeclaration: false,
					NewExpression: false
				}
			}
		],

		/*
		 * Disallow padding inside computed properties
		 * https://eslint.org/docs/rules/computed-property-spacing
		 */
		'computed-property-spacing': ['error', 'never'],

		/*
		 * Enforces consistent naming when capturing the current execution context
		 * https://eslint.org/docs/rules/consistent-this
		 */
		'consistent-this': 'off',

		/*
		 * enforce newline at the end of file, with no multiple empty lines
		 * https://eslint.org/docs/rules/eol-last
		 */
		'eol-last': ['error', 'always'],

		/*
		 * Enforce spacing between functions and their invocations
		 * https://eslint.org/docs/rules/func-call-spacing
		 */
		'func-call-spacing': ['error', 'never'],

		/*
		 * Requires function names to match the name of the variable or
		 * property to which they are assigned
		 * https://eslint.org/docs/rules/func-name-matching
		 */
		'func-name-matching': [
			'off',
			'always',
			{
				includeCommonJSModuleExports: false,
				considerPropertyDescriptor: true
			}
		],

		/*
		 * Require function expressions to have a name
		 * https://eslint.org/docs/rules/func-names
		 */
		'func-names': 'warn',

		/*
		 * Enforces use of function declarations or expressions
		 * https://eslint.org/docs/rules/func-style
		 */
		'func-style': ['off', 'expression'],

		/*
		 * Enforce consistent line breaks inside function parentheses
		 * https://eslint.org/docs/rules/function-paren-newline
		 */
		'function-paren-newline': ['error', 'consistent'],

		/*
		 * Blacklist certain identifiers to prevent them being used
		 * https://eslint.org/docs/rules/id-blacklist
		 */
		'id-blacklist': ['off', 'data', 'err', 'e', 'cb', 'callback'],

		/*
		 * Enforce minimum and maximum identifier lengths
		 * (variable names, property names etc.)
		 * https://eslint.org/docs/rules/id-length
		 */
		'id-length': ['off'],

		/*
		 * Require identifiers to match the provided regular expression
		 * https://eslint.org/docs/rules/id-match
		 */
		'id-match': 'off',

		/*
		 * Enforce the location of arrow function bodies with implicit returns
		 * https://eslint.org/docs/rules/implicit-arrow-linebreak
		 */
		'implicit-arrow-linebreak': 'off',

		/*
		 * Enforce consistent indentation
		 * https://eslint.org/docs/rules/indent
		 */
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				// MemberExpression: null,
				FunctionDeclaration: {
					parameters: 1,
					body: 1
				},
				FunctionExpression: {
					parameters: 1,
					body: 1
				},
				CallExpression: {
					arguments: 1
				},
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				// list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
				ignoredNodes: [
					'JSXElement',
					'JSXElement > *',
					'JSXAttribute',
					'JSXIdentifier',
					'JSXNamespacedName',
					'JSXMemberExpression',
					'JSXSpreadAttribute',
					'JSXExpressionContainer',
					'JSXOpeningElement',
					'JSXClosingElement',
					'JSXText',
					'JSXEmptyExpression',
					'JSXSpreadChild'
				],
				ignoreComments: false
			}
		],

		/*
		 * Enforce the consistent use of either double or single quotes in JSX attributes
		 * https://eslint.org/docs/rules/jsx-quotes
		 */
		'jsx-quotes': ['off', 'prefer-double'],

		/*
		 * Enforces spacing between keys and values in object literal properties
		 * https://eslint.org/docs/rules/key-spacing
		 */
		'key-spacing': ['error', {
			beforeColon: false, afterColon: true
		}],

		/*
		 * Enforce consistent spacing before and after keywords
		 * https://eslint.org/docs/rules/keyword-spacing
		 */
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
				overrides: {
					return: { after: true },
					throw: { after: true },
					case: { after: true }
				}
			}
		],

		/*
		 * Enforce position of line comments
		 * https://eslint.org/docs/rules/line-comment-position
		 */
		'line-comment-position': [
			'off',
			{
				position: 'above',
				ignorePattern: '',
				applyDefaultPatterns: true
			}
		],

		/*
		 * Disallow mixed 'LF' and 'CRLF' as linebreaks
		 * https://eslint.org/docs/rules/linebreak-style
		 */
		'linebreak-style': ['error', 'unix'],

		/*
		 * Require or disallow an empty line between class members
		 * https://eslint.org/docs/rules/lines-between-class-members
		 */
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

		/*
		 * Enforces empty lines around comments
		 * https://eslint.org/docs/rules/lines-around-comment
		 */
		'lines-around-comment': 'off',

		/*
		 * Require or disallow newlines around directives
		 * This rule was deprecated in ESLint v4.0.0 and replaced by the padding-line-between-statements rule
		 * https://eslint.org/docs/rules/lines-around-directive
		 */
		'lines-around-directive': 'off',

		/*
		 * Specify the maximum depth that blocks can be nested
		 * https://eslint.org/docs/rules/max-depth
		 */
		'max-depth': ['error', 4],

		/*
		 * Specify the maximum length of a line in your program
		 * https://eslint.org/docs/rules/max-len
		 */
		'max-len': [
			'error',
			100,
			2,
			{
				ignoreUrls: true,
				ignoreComments: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}
		],

		/*
		 * Specify the max number of lines in a file
		 * https://eslint.org/docs/rules/max-lines
		 */
		'max-lines': [
			'error',
			{
				max: 300,
				skipBlankLines: true,
				skipComments: true
			}
		],

		/*
		 * Enforce a maximum function length
		 * https://eslint.org/docs/rules/max-lines-per-function
		 */
		'max-lines-per-function': [
			'error',
			{
				max: 100,
				skipBlankLines: true,
				skipComments: true,
				IIFEs: true
			}
		],

		/*
		 * Specify the maximum depth callbacks can be nested
		 * https://eslint.org/docs/rules/max-nested-callbacks
		 */
		'max-nested-callbacks': ['error', { max: 3 }],

		/*
		 * Limits the number of parameters that can be used in the function declaration
		 * https://eslint.org/docs/rules/max-params
		 */
		'max-params': ['error', 4],

		/*
		 * Specify the maximum number of statement allowed in a function
		 * https://eslint.org/docs/rules/max-statements
		 */
		'max-statements': 'off',

		/*
		 * Restrict the number of statements per line
		 * https://eslint.org/docs/rules/max-statements-per-line
		 */
		'max-statements-per-line': ['error', { max: 3 }],

		/*
		 * Enforce a particular style for multiline comments
		 * https://eslint.org/docs/rules/multiline-comment-style
		 */
		'multiline-comment-style': 'off',

		/*
		 * Enforce or disallow newlines between operands of ternary expressions
		 * https://eslint.org/docs/rules/multiline-ternary
		 */
		'multiline-ternary': ['error', 'never'],

		/*
		 * Require a capital letter for constructors
		 * https://eslint.org/docs/rules/new-cap
		 */
		'new-cap': [
			'error',
			{
				newIsCap: true,
				newIsCapExceptions: [],
				capIsNew: false,
				capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
			}
		],

		/*
		 * Disallow the omission of parentheses when invoking a constructor with no arguments
		 * https://eslint.org/docs/rules/new-parens
		 */
		'new-parens': 'error',

		/*
		 * Allow/disallow an empty newline after var statement
		 * This rule was deprecated in ESLint v4.0.0 and replaced by the padding-line-between-statements rule
		 * https://eslint.org/docs/rules/newline-after-var
		 */
		'newline-after-var': 'off',

		/*
		 * Require an empty line before return statements
		 * This rule was deprecated in ESLint v4.0.0 and replaced by the padding-line-between-statements rule
		 * https://eslint.org/docs/rules/newline-before-return
		 */
		'newline-before-return': 'off',

		/*
		 * enforces new line after each method call in the chain to make it
		 * more readable and easy to maintain
		 * https://eslint.org/docs/rules/newline-per-chained-call
		 */
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

		/*
		 * Disallow use of the Array constructor
		 * https://eslint.org/docs/rules/no-array-constructor
		 */
		'no-array-constructor': 'error',

		/*
		 * Disallow use of bitwise operators
		 * https://eslint.org/docs/rules/no-bitwise
		 */
		'no-bitwise': 'error',

		/*
		 * Disallow use of the continue statement
		 * https://eslint.org/docs/rules/no-continue
		 */
		'no-continue': 'error',

		/*
		 * Disallow comments inline after code
		 * https://eslint.org/docs/rules/no-inline-comments
		 */
		'no-inline-comments': 'error',

		/*
		 * Disallow if as the only statement in an else block
		 * https://eslint.org/docs/rules/no-lonely-if
		 */
		'no-lonely-if': 'error',

		/*
		 * Disallow un-paren'd mixes of different operators
		 * https://eslint.org/docs/rules/no-mixed-operators
		 */
		'no-mixed-operators': [
			'error',
			{
				/*
				 * the list of arthmetic groups disallows mixing `%` and `**`
				 * with other arithmetic operators.
				 */
				groups: [
					['%', '**'],
					['%', '+'],
					['%', '-'],
					['%', '*'],
					['%', '/'],
					['/', '*'],
					['&', '|', '<<', '>>', '>>>'],
					['==', '!=', '===', '!=='],
					['&&', '||']
				],
				allowSamePrecedence: false
			}
		],

		/*
		 * Disallow mixed spaces and tabs for indentation
		 * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
		 */
		'no-mixed-spaces-and-tabs': 'error',

		/*
		 * Disallow use of chained assignment expressions
		 * https://eslint.org/docs/rules/no-multi-assign
		 */
		'no-multi-assign': ['error'],

		/*
		 * Disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
		 * https://eslint.org/docs/rules/no-multiple-empty-lines
		 */
		'no-multiple-empty-lines': ['error', {
			max: 1, maxBOF: 1, maxEOF: 0
		}],

		/*
		 * Disallow negated conditions
		 * https://eslint.org/docs/rules/no-negated-condition
		 */
		'no-negated-condition': 'off',

		/*
		 * Disallow nested ternary expressions
		 * https://eslint.org/docs/rules/no-nested-ternary
		 */
		'no-nested-ternary': 'error',

		/*
		 * Disallow use of the Object constructor
		 * https://eslint.org/docs/rules/no-new-object
		 */
		'no-new-object': 'error',

		/*
		 * Disallow use of unary operators, ++ and --
		 * https://eslint.org/docs/rules/no-plusplus
		 */
		'no-plusplus': 'error',

		/*
		 * Disallow certain syntax forms
		 * https://eslint.org/docs/rules/no-restricted-syntax
		 */
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
			},
			{
				selector: 'ForOfStatement',
				message:
					'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
			}
		],

		/*
		 * Disallow space between function identifier and application
		 * This rule was deprecated in ESLint v3.3.0 and replaced by the func-call-spacing rule
		 * https://eslint.org/docs/rules/no-spaced-func
		 */
		'no-spaced-func': 'off',

		/*
		 * Disallow tab characters entirely
		 * https://eslint.org/docs/rules/no-tabs
		 */
		'no-tabs': 'off',

		/*
		 * Disallow the use of ternary operators
		 * https://eslint.org/docs/rules/no-ternary
		 */
		'no-ternary': 'off',

		/*
		 * Disallow trailing whitespace at the end of lines
		 * https://eslint.org/docs/rules/no-trailing-spaces
		 */
		'no-trailing-spaces': [
			'error',
			{
				skipBlankLines: false,
				ignoreComments: false
			}
		],

		/*
		 * Disallow dangling underscores in identifiers
		 * https://eslint.org/docs/rules/no-underscore-dangle
		 */
		'no-underscore-dangle': [
			'error',
			{
				// Allow MongoDB object ID's
				allow: ['_id'],
				allowAfterThis: true,
				allowAfterSuper: false,
				enforceInMethodNames: true
			}
		],

		/*
		 * Disallow the use of Boolean literals in conditional expressions
		 * Also, prefer `a || b` over `a ? a : b`
		 * https://eslint.org/docs/rules/no-unneeded-ternary
		 */
		'no-unneeded-ternary': ['error', { defaultAssignment: false }],

		/*
		 * Disallow whitespace before properties
		 * https://eslint.org/docs/rules/no-whitespace-before-property
		 */
		'no-whitespace-before-property': 'error',

		/*
		 * Enforce the location of single-line statements
		 * https://eslint.org/docs/rules/nonblock-statement-body-position
		 */
		'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

		/*
		 * Require padding inside curly braces
		 * https://eslint.org/docs/rules/object-curly-spacing
		 */
		'object-curly-spacing': ['error', 'always'],

		/*
		 * Enforce line breaks between braces
		 * https://eslint.org/docs/rules/object-curly-newline
		 */
		'object-curly-newline': [
			'error',
			{
				ObjectExpression: {
					minProperties: 4, multiline: true, consistent: true
				},
				ObjectPattern: {
					minProperties: 4, multiline: true, consistent: true
				},
				ImportDeclaration: {
					minProperties: 4, multiline: true, consistent: true
				},
				ExportDeclaration: {
					minProperties: 4, multiline: true, consistent: true
				}
			}
		],

		/*
		 * Enforce "same line" or "multiple line" on object properties.
		 * https://eslint.org/docs/rules/object-property-newline
		 */
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: true
			}
		],

		/*
		 * Allow just one var statement per function
		 * https://eslint.org/docs/rules/one-var
		 */
		'one-var': 'off',

		/*
		 * Require a newline around variable declaration
		 * https://eslint.org/docs/rules/one-var-declaration-per-line
		 */
		'one-var-declaration-per-line': ['error', 'always'],

		/*
		 * Require assignment operator shorthand where possible or prohibit it entirely
		 * https://eslint.org/docs/rules/operator-assignment
		 */
		'operator-assignment': ['error', 'always'],

		/*
		 * Requires operator at the beginning of the line in multiline statements
		 * https://eslint.org/docs/rules/operator-linebreak
		 */
		'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

		/*
		 * Disallow padding within blocks
		 * https://eslint.org/docs/rules/padded-blocks
		 */
		'padded-blocks': [
			'error',
			{
				blocks: 'never',
				classes: 'never',
				switches: 'never'
			},
			{
				allowSingleLineBlocks: true
			}
		],

		/*
		 * Require or disallow padding lines between statements
		 * https://eslint.org/docs/rules/padding-line-between-statements
		 */
		'padding-line-between-statements': [
			'error',
			// Padding lines after blocks
			{
				blankLine: 'always',
				prev: [
					'block',
					'block-like'
				],
				next: '*'
			},
			// Padding lines after CommonJS export and class statements
			{
				blankLine: 'always',
				prev: [
					'cjs-export',
					'class'
				],
				next: '*'
			},
			// Padding lines after export and import blocks
			{
				blankLine: 'always',
				prev: ['export', 'import'],
				next: '*'
			},
			{
				blankLine: 'any',
				prev: ['export', 'import'],
				next: ['export', 'import']
			},
			// Padding lines after variable declaration blocks
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*'
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var']
			},
			// Padding lines before throw and return statement
			{
				blankLine: 'always',
				prev: '*',
				next: ['throw', 'return']
			},
			// Padding lines after directive blocks
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*'
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive'
			}
		],

		/*
		 * Prefer use of an object spread over Object.assign
		 * https://eslint.org/docs/rules/prefer-object-spread
		 */
		'prefer-object-spread': 'error',

		/*
		 * Require quotes around object literal property names
		 * https://eslint.org/docs/rules/quote-props.html
		 */
		'quote-props': [
			'error',
			'as-needed',
			{
				keywords: false, unnecessary: true, numbers: false
			}
		],

		/*
		 * Specify whether double or single quotes should be used
		 * https://eslint.org/docs/rules/quotes
		 */
		quotes: ['error', 'single', { avoidEscape: true }],

		/*
		 * Require jsdoc
		 * https://eslint.org/docs/rules/require-jsdoc
		 */
		'require-jsdoc': 'off',

		/*
		 * Require or disallow use of semicolons instead of ASI
		 * https://eslint.org/docs/rules/semi
		 */
		semi: ['error', 'always'],

		/*
		 * Enforce spacing before and after semicolons
		 * https://eslint.org/docs/rules/semi-spacing
		 */
		'semi-spacing': ['error', {
			before: false, after: true
		}],

		/*
		 * Enforce location of semicolons
		 * https://eslint.org/docs/rules/semi-style
		 */
		'semi-style': ['error', 'last'],

		/*
		 * Requires object keys to be sorted
		 * https://eslint.org/docs/rules/sort-keys
		 */
		'sort-keys': ['off', 'asc', {
			caseSensitive: false, natural: true
		}],

		/*
		 * Sort variables within the same declaration block
		 * https://eslint.org/docs/rules/sort-vars
		 */
		'sort-vars': 'off',

		/*
		 * Require or disallow space before blocks
		 * https://eslint.org/docs/rules/space-before-blocks
		 */
		'space-before-blocks': 'error',

		/*
		 * Require or disallow space before function opening parenthesis
		 * https://eslint.org/docs/rules/space-before-function-paren
		 */
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always'
			}
		],

		/*
		 * Disallow or enforce spaces inside of parentheses
		 * https://eslint.org/docs/rules/space-in-parens
		 */
		'space-in-parens': ['error', 'never'],

		/*
		 * Require spacing around infix operators
		 * https://eslint.org/docs/rules/space-infix-ops
		 */
		'space-infix-ops': 'error',

		/*
		 * Require or disallow spaces before/after unary operators
		 * https://eslint.org/docs/rules/space-unary-ops
		 */
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
				overrides: {}
			}
		],

		/*
		 * Require or disallow a space immediately following the // or /* in a comment
		 * https://eslint.org/docs/rules/spaced-comment
		 */
		'spaced-comment': [
			'error',
			'always',
			{
				line: {
					exceptions: ['-', '+'],
					// space here to support sprockets directives
					markers: ['=', '!']
				},
				block: {
					exceptions: ['-', '+'],
					// space here to support sprockets directives and flow comment types
					markers: ['=', '!', ':', '::'],
					balanced: true
				}
			}
		],

		/*
		 * Enforce spacing around colons of switch statements
		 * https://eslint.org/docs/rules/switch-colon-spacing
		 */
		'switch-colon-spacing': ['error', {
			after: true, before: false
		}],

		/*
		 * Require or disallow spacing between template tags and their literals
		 * https://eslint.org/docs/rules/template-tag-spacing
		 */
		'template-tag-spacing': ['error', 'never'],

		/*
		 * Require or disallow the Unicode Byte Order Mark
		 * https://eslint.org/docs/rules/unicode-bom
		 */
		'unicode-bom': ['error', 'never'],

		/*
		 * Require regex literals to be wrapped in parentheses
		 * https://eslint.org/docs/rules/wrap-regex
		 */
		'wrap-regex': 'error'
	}
};
