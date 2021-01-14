import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './components/app';

const Styles = createGlobalStyle({
	body: {
		background: '#ddd',
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
