import { parse } from 'query-string';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/app';

const hash = window.location.hash;

const Styles = createGlobalStyle({
	body: {
		background: '#ddd',
	},
});
const mountNode = document.getElementById('app');

if (hash) eval(parse(hash).code);
else {
	ReactDOM.render(
		<>
			<Styles />
			<App />
		</>,
		mountNode
	);
}
