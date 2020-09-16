import { field } from './field';
import { speed } from './speed';
import { game } from './game';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
	field,
	speed,
	game,
});

export type GameOfLifeState = ReturnType<typeof reducer>;
