import React from 'react';
import './GameOfLifeProto.css';
import {
	FieldPropsComponent,
	FieldPropsInterface,
	FieldState,
} from '../../types/GameOfProto';
import { BtnClearBoard } from '../Interfaces/BtnClearBoard/BtnClearBoard';
import { BtnNewBoard } from '../Interfaces/BtnNewBoard/BtnNewBoard';
import { BtnRunStopGame } from '../Interfaces/BtnRunStopGame/BtnRunStopGame';
import { InputSpeed } from '../Interfaces/InputSpeed/InputSpeed';

export class GameOfLifeProto extends React.Component<
	FieldPropsInterface,
	FieldState
> {
	private fieldComponent: FieldPropsComponent;
	private rows: number;
	private columns: number;
	public timerID: NodeJS.Timeout;

	constructor(props: FieldPropsInterface) {
		super(props);
		this.fieldComponent = props.fieldComponent;
		this.rows = props.rows;
		this.columns = props.columns;
		this.timerID = props.timerID;
		this.state = {
			fieldState: [],
			isRunningGame: false,
			speedValue: 500,
		};
		this.clearBoard = this.clearBoard.bind(this);
		this.updateBoard = this.updateBoard.bind(this);
		this.gameRunStopToggle = this.gameRunStopToggle.bind(this);
		this.onClick = this.onClick.bind(this);
		this.speedChange = this.speedChange.bind(this);
	}

	private cellGridFillRandom(
		rows: number,
		columns: number,
		cellStatus = () => Math.random() < 0.3,
	) {
		const grid: boolean[][] = [];
		for (let y = 0; y < rows; y++) {
			grid[y] = [];
			for (let x = 0; x < columns; x++) {
				grid[y][x] = cellStatus();
			}
		}
		return grid;
	}

	private onClick(x: number, y: number) {
		this.setState((state) => {
			const cloneFieldState = state.fieldState!.map((row) => [...row]);
			cloneFieldState[x][y] = !cloneFieldState[x][y];

			return {
				fieldState: cloneFieldState,
			};
		});
	}

	private clearBoard() {
		this.setState(() => {
			const cloneFieldState = this.cellGridFillRandom(
				this.props.rows,
				this.props.columns,
				() => false,
			);

			return {
				fieldState: cloneFieldState,
			};
		});
	}

	private gameOflife() {
		const nextStep = (prevState: FieldState) => {
			const prevBoard = prevState.fieldState;
			const cloneBoard = this.state.fieldState.map((row) => [...row]);

			const amountTrueNeighbors = (x: number, y: number) => {
				const eightNeighbors = [
					[-1, -1],
					[-1, 0],
					[-1, 1],
					[0, 1],
					[1, 1],
					[1, 0],
					[1, -1],
					[0, -1],
				];
				return eightNeighbors.reduce((trueNeighbors, neighbor) => {
					const xCell = x + neighbor[0];
					const yCell = y + neighbor[1];
					const isNeighborOnBoard =
						xCell >= 0 &&
						xCell < this.props.rows &&
						yCell >= 0 &&
						yCell < this.props.columns;
					if (
						trueNeighbors < 4 &&
						isNeighborOnBoard &&
						prevBoard[xCell][yCell]
					) {
						return trueNeighbors + 1;
					} else {
						return trueNeighbors;
					}
				}, 0);
			};

			for (let r = 0; r < this.props.rows; r++) {
				for (let c = 0; c < this.props.columns; c++) {
					const totalTrueNeighbors = amountTrueNeighbors(r, c);

					if (!prevBoard[r][c]) {
						if (totalTrueNeighbors === 3) cloneBoard[r][c] = true;
					} else {
						if (totalTrueNeighbors < 2 || totalTrueNeighbors > 3)
							cloneBoard[r][c] = false;
					}
				}
			}

			return cloneBoard;
		};

		this.setState((prevState) => ({
			fieldState: nextStep(prevState),
		}));
	}

	private updateBoard() {
		this.setState(() => {
			const cloneFieldState = this.cellGridFillRandom(
				this.props.rows,
				this.props.columns,
			);

			return {
				fieldState: cloneFieldState,
			};
		});
	}

	private setNewBoard() {
		this.setState({
			fieldState: this.cellGridFillRandom(
				this.props.rows,
				this.props.columns,
			),
		});
	}

	private gameRunStopToggle() {
		this.setState((state) => {
			let runningGame = state.isRunningGame;
			runningGame = !runningGame;

			return {
				isRunningGame: runningGame,
			};
		});
	}

	speedChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault();
		const target = e.target.value;

		this.setState({
			speedValue: Number(target),
		});
	}

	componentDidMount() {
		this.setNewBoard();
	}

	componentDidUpdate(prevProps: FieldPropsInterface, prevState: FieldState) {
		const { isRunningGame, speedValue } = this.state;
		const gameStarted = !prevState.isRunningGame && isRunningGame;
		const gameStopped = prevState.isRunningGame && !isRunningGame;

		if (isRunningGame || gameStopped) {
			clearInterval(this.timerID);
		}

		if (isRunningGame || gameStarted) {
			this.timerID = setInterval(() => {
				this.gameOflife();
			}, speedValue);
		}
	}

	render() {
		const FieldComponent = this.fieldComponent;
		return (
			<>
				<FieldComponent
					field={this.state.fieldState}
					onClick={this.onClick}
				/>
				<BtnRunStopGame
					isRunningGame={this.state.isRunningGame}
					onClick={this.gameRunStopToggle}
				/>
				{' / '}
				<BtnClearBoard onClick={this.clearBoard} />
				{' / '}
				<BtnNewBoard onClick={this.updateBoard} />
				{' / '}
				<InputSpeed
					speedValue={this.state.speedValue}
					onChange={this.speedChange}
				/>
			</>
		);
	}
}
