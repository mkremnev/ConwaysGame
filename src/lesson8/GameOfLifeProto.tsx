import React from 'react';
import './GameOfLifeProto.css';

type FieldPropsComponent = React.FC<{
	field: boolean[][];
	onClick: () => void;
}>;

interface FieldPropsInterface {
	rows: number;
	columns: number;
	fieldComponent: FieldPropsComponent;
}

interface FieldState {
	fieldState: boolean[][];
}

const cellGridFillRandom = (
	rows: number,
	columns: number,
	cellStatus = () => Math.random() < 0.3,
) => {
	const grid: boolean[][] = [];
	for (let y = 0; y < rows; y++) {
		grid[y] = [];
		for (let x = 0; x < columns; x++) {
			grid[y][x] = cellStatus();
		}
	}
	return grid;
};

class GameOfLifeProto extends React.Component<FieldPropsInterface, FieldState> {
	private fieldComponent: FieldPropsComponent;

	constructor(props: FieldPropsInterface) {
		super(props);
		this.fieldComponent = props.fieldComponent;
		this.state = {
			fieldState: cellGridFillRandom(this.props.rows, this.props.columns),
		};
		this.onClick = this.onClick.bind(this);
	}

	public onClick() {
		this.setState((state) => {
			const cloneFieldState = cellGridFillRandom(
				this.props.rows,
				this.props.columns,
			);

			return {
				fieldState: cloneFieldState,
			};
		});
	}

	render() {
		const FieldComponent = this.fieldComponent;
		return (
			<>
				<FieldComponent
					field={this.state.fieldState}
					onClick={this.onClick}
				/>
				<button className="btn" onClick={() => this.onClick()}>
					{'Обновить'}
				</button>
			</>
		);
	}
}

export default GameOfLifeProto;
