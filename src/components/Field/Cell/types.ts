export interface CellProps {
	filled?: boolean;
	x?: number;
	y?: number;
	onClick: (x: number, y: number) => void;
}

export interface StyledProps {
	isFilled: boolean | undefined;
}
