export type Coordinates = { x: number; y: number };

export type FieldState = {
	board: boolean[][];
	gameStatus: boolean;
	value: string;
	rows: number;
	columns: number;
};

export type SizeField = Pick<FieldState, 'rows' | 'columns'>;
