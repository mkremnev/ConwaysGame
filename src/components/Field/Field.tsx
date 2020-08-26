import React, { FC } from 'react';
import { Cell } from './Cell/Cell';
import type { FieldProps } from '../../types/Field';
import styled from '@emotion/styled';

const NextLine = styled.p`
	margin: 0;
	padding: 0;
	line-height: 0;
`;

const WrapperField = styled.div`
	margin: 0;
	padding: 0;
	line-height: 0;
`;

export const Field: FC<FieldProps> = ({ field, onClick }) => (
	<WrapperField>
		{field.map((row, y) => [
			...row.map((_filled: boolean, x) => (
				<Cell
					key={`${x}_${y}`}
					filled={field[y][x]}
					x={x}
					y={y}
					onClick={() => onClick(y, x)}
				/>
			)),
			y !== row.length - 1 ? <NextLine key={y} /> : null,
		])}
	</WrapperField>
);
