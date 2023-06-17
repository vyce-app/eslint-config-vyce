module.exports = {
	extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],

	plugins: ['react', 'react-hooks'],

	overrides: [
		{
			files: ['*.tsx', '*.jsx'],

			rules: {
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'default',
						format: ['camelCase'],
					},
					{
						selector: 'variable',
						format: ['camelCase', 'UPPER_CASE'],
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
						leadingUnderscore: 'require',
					},
					{
						selector: 'typeLike',
						format: ['PascalCase'],
					},
					{
						selector: 'function',
						format: ['PascalCase', 'camelCase'],
					},
				],
			},
		},
	],

	settings: {
		react: {
			// Regex for Component Factory to use,
			createClass: 'createReactClass',
			// Pragma to use, default to "React"
			pragma: 'React',
			// Fragment to use (may be a property of <pragma>), default to "Fragment"
			fragment: 'Fragment',
			// React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			// It will default to "latest" and warn if missing, and to "detect" in the future
			version: 'detect',
			// Flow version
			flowVersion: '0.53',
		},
		propWrapperFunctions: [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			'forbidExtraProps',
			{ property: 'freeze', object: 'Object' },
			{ property: 'myFavoriteWrapper' },
			// for rules that check exact prop wrappers
			{ property: 'forbidExtraProps', exact: true },
		],
		componentWrapperFunctions: [
			// The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
			// `property`
			'observer',
			// `object` is optional
			{ property: 'styled' },
			{ property: 'observer', object: 'Mobx' },
			// sets `object` to whatever value `settings.react.pragma` is set to
			{ property: 'observer', object: '<pragma>' },
		],
		formComponents: [
			// Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
			'CustomForm',
			{ name: 'Form', formAttribute: 'endpoint' },
		],
		linkComponents: [
			// Components used as alternatives to <a> for linking, eg. <Link to={ url } />
			'Hyperlink',
			{ name: 'Link', linkAttribute: 'to' },
		],
	},
};
