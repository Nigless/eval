import { stringify } from 'query-string';
import React, { useEffect, useState } from 'react';
import { QRCode } from 'react-qr-svg';
import { compress } from 'shrink-string';
import styled from 'styled-components';
import Label from './label';

const Root = styled.div({
	border: 'solid 2px #aaa',
	borderRadius: 2,
	padding: 15,
	background: '#fff',
	'&>*+*': {
		marginTop: 10,
	},
});

const TextField = styled.textarea({
	display: 'block',
	width: '100% !important',
	fontFamily: 'monospace',
});

const Link = styled.a({
	display: 'block',
	wordWrap: 'break-word',
});

const QR = styled(QRCode)({
	display: 'block',
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

	const checkQRHandler = async (event) => {
		setState({
			...state,
			generateQR: event.target.checked,
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
		<Root>
			<Label name="Put your js code here:">
				<TextField
					defaultValue={'alert("Hello World!")'}
					onChange={textFieldHandler.bind(this)}
				/>
			</Label>
			<div>
				<Label>
					<input
						type="checkbox"
						onChange={checkCompressHandler.bind(this)}
					/>
					Compress
				</Label>
				<Label>
					<input type="checkbox" onChange={checkQRHandler.bind(this)} />
					Generate QR code
				</Label>
			</div>
			<Label as="div" name="Result:">
				{state.code !== '' ? (
					<Link href={state.url}>{state.url}</Link>
				) : (
					<div>¯\_(ツ)_/¯</div>
				)}
			</Label>
			{state.generateQR ? (
				state.code ? (
					<QR value={state.url} />
				) : undefined
			) : undefined}
		</Root>
	);
}
