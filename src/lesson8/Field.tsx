import React, { FC } from 'react';
import { Cell } from './Cell';
import './Field.css';
import type { FieldProps } from './Interfaces';

export const Field: FC<FieldProps> = ({ field, onClick }) => (
	<div className="field">
		{field.map((row, y) => [
			...row.map((filled: boolean, x) => (
				<Cell
					key={`${x}_${y}`}
					filled={field[y][x]}
					x={x}
					y={y}
					onClick={() => onClick(y, x)}
				/>
			)),
			y !== row.length - 1 ? <p key={y} /> : null,
		])}
	</div>
);
