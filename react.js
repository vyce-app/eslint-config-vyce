module.exports = {
	extends: [
		require.resolve('./browser'),
		require.resolve('./rules/typescript'),
		require.resolve('./rules/react'),
	],
};
