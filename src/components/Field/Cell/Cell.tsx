import React, { FC } from 'react';
import { CellWrapper } from './Cellstyled';
import type { CellProps } from '../../../types/Cell';

export const Cell: FC<CellProps> = React.memo(
	({ filled, x, y, onClick }) => {
		return (
			<CellWrapper
				isFilled={filled}
				onClick={() => {
					onClick(x || 0, y || 0);
				}}
			/>
		);
	},
	(prevProps: CellProps, nextProps: CellProps) =>
		prevProps.filled === nextProps.filled,
);

Cell.displayName = 'Cell';
