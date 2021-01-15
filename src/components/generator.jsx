import { stringify } from 'query-string';
import React, { useEffect, useState } from 'react';
import { compress } from 'shrink-string';
import styled from 'styled-components';

const TextField = styled.textarea({
	display: 'block',
	width: '100% !important',
	fontFamily: 'monospace',
});

const Link = styled.a({
	display: 'block',
	wordWrap: 'break-word',
});

export default function Generator() {
	const [state, setState] = useState({
		compress: false,
		code: 'alert("Hello World!")',
		url: '',
	});

	useEffect(
		async () => setState({ ...state, url: await generateUrl(state.code) }),
		[]
	);

	const textFieldHandler = async (event) => {
		setState({
			...state,
			url: await generateUrl(event.target.value, state.compress),
			code: event.target.value,
		});
	};

	const checkCompressHandler = async (event) => {
		setState({
			...state,
			compress: event.target.checked,
			url: await generateUrl(state.code, event.target.checked),
		});
	};

	const generateUrl = async (code, compressed = false) => {
		if (code === '') return '';
		let url = code;
		if (compressed) {
			url = await compress(url);
		}
		return (
			window.location.host +
			'/#' +
			stringify({ c: compressed || undefined, js: url })
		);
	};

	return (
		<>
			<label>
				Put your js code here:
				<TextField
					defaultValue={'alert("Hello World!")'}
					onChange={textFieldHandler.bind(this)}
				/>
			</label>
			<label>
				<input type="checkbox" onChange={checkCompressHandler.bind(this)} />
				Compress
			</label>
			<br />
			<label>
				Result:
				{state.code !== '' ? (
					<Link href={state.url}>{state.url}</Link>
				) : (
					<div>¯\_(ツ)_/¯</div>
				)}
			</label>
		</>
	);
}
