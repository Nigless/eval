import React from 'react';
import styled from 'styled-components';

const Header = styled.div({});
const Root = styled.label({
	display: 'block',
});
export default function Label(props) {
	const { name, children, as } = props;
	return (
		<Root as={as}>
			{name ? <Header>{name}</Header> : undefined}
			{children}
		</Root>
	);
}
