import { Action } from 'redux';
import * as actionTypes from '@/rdx/actions';

export type SpeedState = {
	value: number;
};

const defaultState: SpeedState = {
	value: 500,
};

export function speed(
	state: SpeedState = defaultState,
	action: Action & { payload?: any },
): SpeedState {
	switch (action.type) {
		case actionTypes.CHANGE_SPEED: {
			return {
				value: action.payload,
			};
		}
	}

	return state;
}
