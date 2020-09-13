import { Action } from 'redux';
import * as actionTypes from '@/rdx/actions';

export type GameState = {
	gameRun: boolean;
};

const defaultState: GameState = {
	gameRun: false,
};

export function game(
	state: GameState = defaultState,
	action: Action & { payload?: any },
): GameState {
	switch (action.type) {
		case actionTypes.GAME_RUN: {
			return {
				gameRun: !state.gameRun,
			};
		}
	}

	return state;
}
