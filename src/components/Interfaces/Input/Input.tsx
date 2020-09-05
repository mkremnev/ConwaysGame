/** @jsx jsx */
import React, { useState } from 'react';
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

const styleInput = (style: styleInput) => css`
	border: ${style.border || '1px solid grey'};
	size: ${style.size || 10};
`;

export const Input = React.memo(
	(props: React.HTMLProps<HTMLInputElement>) => {
		const [value, setValue] = useState(0 || '');
		return (
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				{...props}
				css={styleInput}
			/>
		);
	},
	(
		prevProps: React.HTMLProps<HTMLInputElement>,
		nextProps: React.HTMLProps<HTMLInputElement>,
	) => prevProps.value === nextProps.value,
);

Input.displayName = 'Input';
