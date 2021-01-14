import { stringify } from 'query-string';
import React, { useState } from 'react';
import styled from 'styled-components';

const TextField = styled.textarea({
	display: 'block',
	width: '100% !important',
	fontFamily: 'monospace',
});

export default function Generator() {
	const [code, setCode] = useState('alert("Hello World!")');

	const TextFieldHandler = (event) => {
		setCode(event.target.value);
	};

	return (
		<>
			<label>
				Put your js code here:
				<TextField onChange={TextFieldHandler.bind(this)}>{code}</TextField>
			</label>
			<label>
				Link:
				<div>{window.location.hostname + '/#' + stringify({ code })}</div>
			</label>
		</>
	);
}
