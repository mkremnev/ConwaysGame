import { createReducer } from '@reduxjs/toolkit';
import * as actions from '@/rdx/actions';

export type SpeedState = {
	value: string;
};

const defaultState: SpeedState = {
	value: '500',
};

export const speed = createReducer<SpeedState>(defaultState, {
	[actions.changeSpeed.type]: (state, action) => {
		const newState = state;
		newState.value = action.payload;
		return newState;
	},
});
