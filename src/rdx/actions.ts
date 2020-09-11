export const SET_CELL = 'SET_CELL';
export const CLEAR_BOARD = 'CLEAR_BOARD';
export const UPDATE_BOARD = 'UPDATE_BOARD';
export const CHANGE_SPEED = 'CHANGE_SPEED';
export const GAME_RUN = 'GAME_RUN';

export type Coordinates = { x: number; y: number };
export type SpeedState = number | string;

export function setFill(payload: Coordinates) {
	return {
		type: SET_CELL,
		payload,
	};
}

export function clearBoard() {
	return {
		type: CLEAR_BOARD,
	};
}

export function updateBoard() {
	return {
		type: UPDATE_BOARD,
	};
}

export function changeSpeed(payload: SpeedState) {
	return {
		type: CHANGE_SPEED,
		payload,
	};
}

export function gameRun() {
	return {
		type: GAME_RUN,
	};
}
