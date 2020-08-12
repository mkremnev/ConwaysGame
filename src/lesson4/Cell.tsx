import React, { FC } from 'react';
import './Cell.css';
import type { CellProps } from './Interfaces';

const Cell: FC<CellProps> = ({ filled, x, y }) => {
	if (filled) {
		return <div className="cell cell-filled">{filled}</div>;
	}

	return <div className="cell cell-empty"></div>;
};

export { Cell };
