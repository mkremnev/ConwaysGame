import { createReducer } from '@reduxjs/toolkit';
import * as actions from '@/rdx/actions';

export type GameState = {
	gameRun: boolean;
};

const defaultState: GameState = {
	gameRun: false,
};

export const game = createReducer<GameState>(defaultState, {
	[actions.gameRun.type]: (state) => {
		const newState = state;
		newState.gameRun = !state.gameRun;
		return newState;
	},
});
