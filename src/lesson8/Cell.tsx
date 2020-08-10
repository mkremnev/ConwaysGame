import React, { FC } from 'react';
import './Cell.css';
import type { CellProps } from './Interfaces';

export const Cell: FC<CellProps> = ({ filled, x, y, onClick }) => {
	if (filled) {
		return (
			<button
				className="cell cell-filled"
				onClick={() => onClick(x || 0, y || 0)}
			>
				{filled}
			</button>
		);
	}

	return (
		<button
			className="cell cell-empty"
			onClick={() => onClick(x || 0, y || 0)}
		></button>
	);
};
