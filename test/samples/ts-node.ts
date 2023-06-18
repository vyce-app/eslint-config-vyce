type FooType = {
	bar: (params: Record<string, string>) => string;
};

const DEFAULT_FOO: Record<string, string> = { bar: 'foo' };

const foo : FooType = {
	bar: params => DEFAULT_FOO.bar + params.bar
};
