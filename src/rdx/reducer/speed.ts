import { Action } from 'redux';
import * as actionTypes from '@/rdx/actions';

export type SpeedState = number;

const defaultState: SpeedState = 500;

export function speed(
	state: SpeedState = defaultState,
	action: Action & { payload?: any },
): SpeedState {
	switch (action.type) {
		case actionTypes.CHANGE_SPEED: {
			return action.payload as number;
		}
	}

	return state;
}
