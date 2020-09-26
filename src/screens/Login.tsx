import React from 'react';
import { Login } from '@/modules/Login/Login';
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

export const Signin: React.FC<{}> = () => {
	return (
		<WrapperInputTime>
			<Login />
		</WrapperInputTime>
	);
};
