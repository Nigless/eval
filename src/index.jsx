import { parse } from 'query-string';
import React from 'react';
import ReactDOM from 'react-dom';
import { decompress } from 'shrink-string';
import { createGlobalStyle } from 'styled-components';
import App from './components/app';

const runCode = async (hash) => {
	const query = parse(hash);
	let code = query.js;

	// is compressed
	if (query.c === 'true') code = await decompress(code);

	eval(code);
};

const hash = window.location.hash;
if (hash) {
	runCode(hash);
} else {
	const Styles = createGlobalStyle({
		body: {
			background: '#ddd',
			fontFamily: 'roboto',
			lineHeight: 1.5,
		},
	});
	const mountNode = document.getElementById('app');
	ReactDOM.render(
		<>
			<Styles />
			<App />
		</>,
		mountNode
	);
}
