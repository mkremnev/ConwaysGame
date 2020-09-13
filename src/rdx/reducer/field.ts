import { Action } from 'redux';
import * as actionTypes from '@/rdx/actions';

type FieldState = boolean[][];

const cellGridFillRandom = (
	rows: number,
	columns: number,
	cellStatus = () => Math.random() < 0.3,
) => {
	const grid: FieldState = [];
	for (let y = 0; y < rows; y++) {
		grid[y] = [];
		for (let x = 0; x < columns; x++) {
			grid[y][x] = cellStatus();
		}
	}
	return grid;
};

const defaultState: FieldState = cellGridFillRandom(20, 20);

export function field(
	state: FieldState = defaultState,
	action: Action & { payload?: any },
): FieldState {
	switch (action.type) {
		case actionTypes.SET_CELL: {
			const { x, y } = action.payload;
			const newState = state.map((row) => [...row]);
			newState[x][y] = !newState[x][y];
			return newState;
		}

		case actionTypes.CLEAR_BOARD: {
			const newState = cellGridFillRandom(20, 20, () => false);
			return newState;
		}

		case actionTypes.UPDATE_BOARD: {
			const newState = cellGridFillRandom(20, 20);
			return newState;
		}

		case actionTypes.IS_GAME: {
			const nextStep = (prevState: FieldState) => {
				const prevBoard = prevState;
				const cloneBoard = state.map((row) => [...row]);

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
							xCell < 20 &&
							yCell >= 0 &&
							yCell < 20;
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

				for (let rows = 0; rows < 20; rows++) {
					for (let columns = 0; columns < 20; columns++) {
						const totalAliveNeighbors = amountAliveNeighbors(
							rows,
							columns,
						);

						if (!prevBoard[rows][columns]) {
							if (totalAliveNeighbors === 3)
								cloneBoard[rows][columns] = true;
						} else {
							if (
								totalAliveNeighbors < 2 ||
								totalAliveNeighbors > 3
							)
								cloneBoard[rows][columns] = false;
						}
					}
				}

				return cloneBoard;
			};
			return nextStep(state);
		}
	}

	return state;
}
