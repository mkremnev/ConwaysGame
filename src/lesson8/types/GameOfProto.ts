export type FieldPropsComponent = React.FC<{
	field: boolean[][];
	onClick: (x: number, y: number) => void;
}>;

export interface FieldPropsInterface {
	rows: number;
	columns: number;
	fieldComponent: FieldPropsComponent;
}

export interface FieldState {
	fieldState: boolean[][];
}
