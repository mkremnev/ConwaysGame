import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { loginSaga } from '@/modules/Login/saga';
import { fieldSaga } from '@/modules/GameOfLifeWithRedux/saga';
import { combineReducers } from 'redux';
import { LoginSlice } from '@/modules/Login/reducer';
import { fieldSlice } from '@/modules/GameOfLifeWithRedux/reducer';
import { fork } from 'redux-saga/effects';

export const reducer = combineReducers({
	game: fieldSlice.reducer,
	login: LoginSlice.reducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;

const SagaMiddleware = createSagaMiddleware();

function* rootSaga() {
	yield fork(loginSaga);
	yield fork(fieldSaga);
}

export const store = configureStore({
	reducer,
	middleware: [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					'field/clearBoard',
					'field/updateBoard',
					'field/isGame',
					'gameRun',
				],
			},
		}),
		SagaMiddleware,
	],
});
SagaMiddleware.run(rootSaga);
