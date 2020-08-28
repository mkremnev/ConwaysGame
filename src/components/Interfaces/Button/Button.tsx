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
};

const styleButton = (props: StyledType) => css`
	color: ${props.color || 'white'};
	border-radius: ${props.radius || '20px 20px'};
	background-color: ${props.backgroundColor || '#007bff'};
	border-color: #007bff;
	outline: none;
	display: inline-block;
	line-height: 1.5;
	cursor: pointer;
	text-align: center;
	vertical-align: middle;
	padding: 0.375rem 0.75rem;
	margin-right: 10px;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	&:hover {
		color: #fff;
		background-color: #0069d9;
		border-color: #0062cc;
	}
`;

const Btn = styled.button`
	${styleButton}
`;

export const Button: FC<StyledType & ButtonType> = (
	props: StyledType & ButtonType,
) => {
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
