import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		// Setting this to true allows you to reference the APIs globally (describe, expect, it, should etc.)
		globals: true,
		// This is where you choose what browser-like environment you want to use.
		environment: 'jsdom',
		coverage: {
			reporter: ['text', 'html'],
			exclude: [
				'node_modules/',
			],
		},
	},
})
