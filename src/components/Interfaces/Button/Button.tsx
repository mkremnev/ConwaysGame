import React, { FC } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

export type StyledType = {
	color?: string;
	radius?: string;
	backgroundColor?: string;
};

export type ButtonType = {
	text: string;
	onClick: () => void;
	color?: string;
	radius?: string;
	backgroundColor?: string;
};

const styleButton = (props: StyledType) => css`
	color: ${props.color || 'white'};
	border-radius: ${props.radius || '20px 20px'};
	background-color: ${props.backgroundColor || 'black'};
	outline: none;
	line-height: 2;
`;

const Btn = styled.button`
	${styleButton}
`;

export const Button: FC<ButtonType> = ({ ...props }) => {
	return (
		<Btn
			onClick={props.onClick}
			color={props.color}
			radius={props.radius}
			backgroundColor={props.backgroundColor}
		>
			{props.text}
		</Btn>
	);
};
