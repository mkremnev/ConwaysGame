import React, { FC } from 'react';
import { CellWrapper } from './Styled';

export interface CellProps {
	filled?: boolean;
	x?: number;
	y?: number;
	onClick: (x: number, y: number) => void;
}

export interface StyledProps {
	isFilled: boolean | undefined;
}

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
