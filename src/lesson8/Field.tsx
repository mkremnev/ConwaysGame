import React, { FC } from 'react';
import { Cell } from './Cell';
import './Field.css';
import type { FieldProps } from './Interfaces';

const Field: FC<FieldProps> = ({ field }) => (
	<div className="field">
		{field.map((row, y) => [
			...row.map((filled: boolean, x) => (
				<Cell key={`${x}_${y}`} filled={field[y][x]} x={x} y={y} />
			)),
			y !== row.length - 1 ? <p key={y} /> : null,
		])}
	</div>
);

export { Field };
