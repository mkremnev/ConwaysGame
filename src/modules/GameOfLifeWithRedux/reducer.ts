import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cellGridFillRandom, gameOflife } from './helpers';
import { FieldState, Coordinates, SizeField } from './types';

const defaultState: FieldState = {
	board: cellGridFillRandom(20, 20),
	gameStatus: false,
	value: '500',
	rows: 20,
	columns: 20,
};

export const fieldSlice = createSlice({
	name: 'field',
	initialState: defaultState,
	reducers: {
		setCell: (state, { payload }: PayloadAction<Coordinates>) => {
			const { board } = state;
			board[payload.x][payload.y] = !board[payload.x][payload.y];
		},
		clearBoard: (state) => {
			const { rows, columns } = state;
			return {
				...state,
				board: cellGridFillRandom(rows, columns, () => false),
			};
		},
		updateBoard: (state) => {
			const { rows, columns } = state;
			return {
				...state,
				board: cellGridFillRandom(rows, columns),
			};
		},
		gameRun: (state) => ({
			...state,
			gameStatus: !state.gameStatus,
		}),
		isGame: (state) => {
			const { rows, columns } = state;
			return {
				...state,
				board: gameOflife(state.board, rows, columns),
			};
		},
		changeSpeed: (state, { payload }: PayloadAction<string>) => ({
			...state,
			value: payload,
		}),
		addCell: (state, { payload }: PayloadAction<SizeField>) => ({
			...state,
			rows: Number(payload.rows),
			columns: Number(payload.columns),
		}),
	},
});

export const { reducer, actions } = fieldSlice;
