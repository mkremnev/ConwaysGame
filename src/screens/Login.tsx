import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '@/api/auth';
import { InputName } from '@/components/Users/InputName';
import styled from '@emotion/styled';

const WrapperInputTime = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
`;

export const Login: React.FC<{}> = () => {
	const [name, setName] = useState('');

	const history = useHistory();
	const onSubmit = useCallback(
		async (ev) => {
			ev.preventDefault();
			await login(name);
			history.push('/');
		},
		[name],
	);

	const onChange = (ev: HTMLInputElement) =>
		setName((ev.target as HTMLInputElement).value);

	return (
		<WrapperInputTime>
			<InputName onSubmit={onSubmit} onChange={onChange} value={name} />
		</WrapperInputTime>
	);
};
