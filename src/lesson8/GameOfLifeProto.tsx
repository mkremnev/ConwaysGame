import React from 'react';
import './GameOfLifeProto.css';
import {
	FieldPropsComponent,
	FieldPropsInterface,
	FieldState,
} from './Interfaces';

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

export class GameOfLifeProto extends React.Component<
	FieldPropsInterface,
	FieldState
> {
	private fieldComponent: FieldPropsComponent;

	constructor(props: FieldPropsInterface) {
		super(props);
		this.fieldComponent = props.fieldComponent;
		this.state = {
			fieldState: [],
		};
		this.clear = this.clear.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	public clear() {
		this.setState(() => {
			const cloneFieldState = cellGridFillRandom(
				this.props.rows,
				this.props.columns,
			);

			return {
				fieldState: cloneFieldState,
			};
		});
	}

	public onClick(x: number, y: number) {
		this.setState((state) => {
			const cloneFieldState = state.fieldState!.map((row) => [...row]);
			cloneFieldState[x][y] = !cloneFieldState[x][y];

			return {
				fieldState: cloneFieldState,
			};
		});
	}

	componentDidMount() {
		this.setState({
			fieldState: cellGridFillRandom(this.props.rows, this.props.columns),
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
				<button className="btn" onClick={() => this.clear()}>
					{'Обновить'}
				</button>
			</>
		);
	}
}
