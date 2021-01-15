import React from 'react';
import styled from 'styled-components';
import Generator from './generator/generator';

const Root = styled.div({
	margin: 'auto',
	width: 500,
});

const Heading = styled.h1({
	textAlign: 'center',
});

export default function App() {
	return (
		<Root>
			<Heading>Eval</Heading>
			<Generator />
		</Root>
	);
}
