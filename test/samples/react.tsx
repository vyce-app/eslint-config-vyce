import React from 'react';
import ReactDOM from 'react-dom';

const mutate = (instance: Element | Text) => {
	const element = instance;

	element.textContent = 'mutated';

	return element;
};

export default function Test() {
	const containerRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (containerRef.current) {
			const instance = ReactDOM.findDOMNode(containerRef.current);

			if (instance) {
				mutate(instance);
			}
		}
	}, []);

	return <div ref={containerRef}>test</div>;
}
