import React from 'react';
import styled from 'styled-components';

const Root = styled.div({
	margin: 'auto',
	width: 500,
});

const Heading = styled.h1({
	textAlign: 'center',
});

const Body = styled.div({
	border: 'solid 2px #aaa',
	borderRadius: 2,
	padding: 15,
	background: '#fff',
});

export default function App() {
	return (
		<Root>
			<Heading>Eval</Heading>
			<Body></Body>
		</Root>
	);
}
