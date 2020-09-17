import { fieldReducers } from './field';
import { dataReducer } from './flow';
import { speed } from './speed';
import { game } from './game';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
	field: fieldReducers,
	flow: dataReducer,
	speed,
	game,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
