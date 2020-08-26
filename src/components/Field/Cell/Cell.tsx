import React, { FC } from 'react';
import { CellWrapper } from './Cellstyled';
import type { CellProps } from '../../../types/Cell';

export const Cell: FC<CellProps> = ({ filled, x, y, onClick }) => {
	return (
		<CellWrapper
			isFilled={filled}
			onClick={() => onClick(x || 0, y || 0)}
		/>
	);
};
