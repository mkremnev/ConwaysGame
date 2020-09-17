import { fieldReducers } from './field';
import { dataReducer } from './swap';
import { speed } from './speed';
import { game } from './game';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
	field: fieldReducers,
	swap: dataReducer,
	speed,
	game,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
