/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

export type styleInput = {
	border?: string;
	size?: number;
};

export type styledInput = {
	type: string;
	name: string;
	placeholder?: string;
	min?: string;
	max?: string;
	step?: string;
	value?: number | string;
};

export type InputType = {
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const styleInput = (style: styleInput) => css`
	border: ${style.border || '1px solid grey'};
	size: ${style.size || 10};
`;

export const Input = ({ ...props }: InputType & styledInput) => (
	<input {...props} type={props.type} css={styleInput} />
);

Input.displayName = 'Input';
