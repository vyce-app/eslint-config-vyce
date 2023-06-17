const spawn = require('cross-spawn');

describe('ts-node', () => {
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
				'./test/samples/ts-node.ts',
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
				'./test/configs/ts-node.js',
				'./test/samples/ts-node.ts',
			],
			{ encoding: 'utf8' },
		);

		const output = JSON.parse(
			result.stdout.substring(result.stdout.indexOf('[')),
		);

		expect(output.length).toBe(1);
		expect(output[0].messages.length).toBe(3);
		expect(output[0].messages[0].ruleId).toBe(
			'@typescript-eslint/no-unused-vars',
		);
		expect(output[0].messages[1].ruleId).toBe(
			'@typescript-eslint/type-annotation-spacing',
		);
		expect(output[0].messages[2].ruleId).toBe(
			'@typescript-eslint/comma-dangle',
		);
	});

	it('returns configuration', () => {
		const config = require('../ts-node');

		expect(config).toBeDefined();
		expect(config.extends).toBeDefined();
		expect(config.extends).toHaveLength(2);
	});
});
