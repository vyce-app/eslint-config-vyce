const { defineConfig } = require('vite');

module.exports = defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			reporter: ['text', 'html'],
			exclude: ['node_modules/'],
		},
	},
});
