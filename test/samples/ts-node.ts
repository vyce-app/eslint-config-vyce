type FooType = {
	bar: (params: Record<string, string>) => string;
};

const foo : FooType = {
	bar: params => params.foo
};
