import React from 'react';
import './GameOfLifeProto.css';
import {
	FieldPropsComponent,
	FieldPropsInterface,
	FieldState,
} from '../../types/GameOfProto';
import { BtnCommon } from '../Interfaces/BtnCommon/BtnCommon';
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
		this.timerID = props.timerID as NodeJS.Timeout;
		this.state = {
			fieldState: [],
			isRunningGame: false,
			speedValue: 500,
		};
	}

	cellGridFillRandom = (
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

	onClick = (x: number, y: number) => {
		this.setState((state) => {
			const cloneFieldState = state.fieldState!.map((row) => [...row]);
			cloneFieldState[x][y] = !cloneFieldState[x][y];

			return {
				fieldState: cloneFieldState,
			};
		});
	};

	clearBoard = () => {
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
	};

	gameOflife = () => {
		const nextStep = (prevState: FieldState) => {
			const prevBoard = prevState.fieldState;
			const cloneBoard = this.state.fieldState.map((row) => [...row]);

			const amountAliveNeighbors = (x: number, y: number) => {
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

				return eightNeighbors.reduce((aliveNeighbors, neighbor) => {
					const xCell = x + neighbor[0];
					const yCell = y + neighbor[1];
					const endBoard =
						xCell >= 0 &&
						xCell < this.props.rows &&
						yCell >= 0 &&
						yCell < this.props.columns;
					if (
						aliveNeighbors < 4 &&
						endBoard &&
						prevBoard[xCell][yCell]
					) {
						return aliveNeighbors + 1;
					} else {
						return aliveNeighbors;
					}
				}, 0);
			};

			for (let rows = 0; rows < this.props.rows; rows++) {
				for (let columns = 0; columns < this.props.columns; columns++) {
					const totalAliveNeighbors = amountAliveNeighbors(
						rows,
						columns,
					);

					if (!prevBoard[rows][columns]) {
						if (totalAliveNeighbors === 3)
							cloneBoard[rows][columns] = true;
					} else {
						if (totalAliveNeighbors < 2 || totalAliveNeighbors > 3)
							cloneBoard[rows][columns] = false;
					}
				}
			}

			return cloneBoard;
		};

		this.setState((prevState) => ({
			fieldState: nextStep(prevState),
		}));
	};

	updateBoard = () => {
		this.setState(() => {
			const cloneFieldState = this.cellGridFillRandom(
				this.props.rows,
				this.props.columns,
			);

			return {
				fieldState: cloneFieldState,
			};
		});
	};

	setNewBoard = () => {
		this.setState({
			fieldState: this.cellGridFillRandom(
				this.props.rows,
				this.props.columns,
			),
		});
	};

	gameRunStopToggle = () => {
		this.setState((state) => {
			let runningGame = state.isRunningGame;
			runningGame = !runningGame;

			return {
				isRunningGame: runningGame,
			};
		});
	};

	speedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const target = e.target.value;

		this.setState({
			speedValue: Number(target),
		});
	};

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
				<BtnCommon text={'Очистить'} onClick={this.clearBoard} />
				{' / '}
				<BtnCommon text={'Обновить'} onClick={this.updateBoard} />
				{' / '}
				<InputSpeed
					speedValue={this.state.speedValue}
					onChange={this.speedChange}
				/>
			</>
		);
	}
}
