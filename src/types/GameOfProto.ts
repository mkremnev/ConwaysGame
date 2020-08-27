export type FieldPropsComponent = React.FC<{
	field: boolean[][];
	onClick: (x: number, y: number) => void;
}>;

export interface FieldPropsInterface {
	rows: number;
	columns: number;
	timerID?: NodeJS.Timeout;
	fieldComponent: FieldPropsComponent;
	onSubmit: () => void;
}

export interface FieldState {
	fieldState: boolean[][];
	isRunningGame: boolean;
	speedValue: number;
	name: string;
}
