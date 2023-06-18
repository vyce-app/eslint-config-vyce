const spawn = require('cross-spawn');

describe('react', () => {
	it('samples does not throw errors without eslint-config-vyce', () => {
		const result = spawn.sync(
			'npm',
			[
				'run',
				'test:spec',
				'--silent',
				'--',
				'--no-ignore',
				'--no-eslintrc',
				'--config',
				'./test/configs/base.js',
				'./test/samples/react.tsx',
			],
			{ encoding: 'utf8' },
		);

		const output = JSON.parse(
			result.stdout.substring(result.stdout.indexOf('[')),
		);

		expect(output.length).toBe(1);
		expect(output[0].messages.length).toBe(0);
	});

	it('samples throws errors with eslint-config-vyce', () => {
		const result = spawn.sync(
			'npm',
			[
				'run',
				'test:spec',
				'--silent',
				'--',
				'--no-ignore',
				'--no-eslintrc',
				'--config',
				'./test/configs/react.js',
				'./test/samples/react.tsx',
			],
			{ encoding: 'utf8' },
		);

		const output = JSON.parse(
			result.stdout.substring(result.stdout.indexOf('[')),
		);

		expect(output[0].messages[0].ruleId).toBe(
			'react/no-find-dom-node',
		);
		expect(output[0].messages.length).toBe(1);
		expect(output.length).toBe(1);
	});

	it('returns configuration', () => {
		const config = require('../react');

		expect(config).toBeDefined();
		expect(config.extends).toBeDefined();
		expect(config.extends).toHaveLength(3);
	});
});
