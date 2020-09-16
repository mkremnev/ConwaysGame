import { createAction } from '@reduxjs/toolkit';

export type Coordinates = { x: number; y: number };
export type SpeedState = number | string;

export const setCell = createAction<Coordinates>('setCell');
export const clearBoard = createAction<void>('clearBoard');
export const updateBoard = createAction<void>('updateBoard');
export const changeSpeed = createAction<SpeedState>('changeSpeed');
export const gameRun = createAction<void>('gameRun');
export const isGame = createAction<void>('isGame');
