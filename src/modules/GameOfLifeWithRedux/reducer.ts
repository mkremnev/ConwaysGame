import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cellGridFillRandom, gameOflife } from './helpers';

export type Coordinates = { x: number; y: number };
export type SpeedState = number | string;

export type FieldState = {
	board: boolean[][];
	gameStatus: boolean;
	value: string;
};

const defaultState: FieldState = {
	board: cellGridFillRandom(20, 20),
	gameStatus: false,
	value: '500',
};

export const fieldSlice = createSlice({
	name: 'field',
	initialState: defaultState,
	reducers: {
		setCell: (state, { payload }: PayloadAction<Coordinates>) => {
			const { board } = { ...state };
			board[payload.x][payload.y] = !board[payload.x][payload.y];
		},
		clearBoard: (state) => ({
			...state,
			board: cellGridFillRandom(20, 20, () => false),
		}),
		updateBoard: (state) => ({
			...state,
			board: cellGridFillRandom(20, 20),
		}),
		gameRun: (state) => ({
			...state,
			gameStatus: !state.gameStatus,
		}),
		isGame: (state) => ({
			...state,
			board: gameOflife(state.board, 20, 20),
		}),
		changeSpeed: (state, { payload }: PayloadAction<string>) => ({
			...state,
			value: payload,
		}),
	},
});

export const { reducer, actions } = fieldSlice;
