import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { loginSaga } from '@/modules/Login/saga';
import { combineReducers } from 'redux';
import { fieldReducers, dataReducer, speed, game } from '@/rdx/reducer';
import { LoginSlice } from '@/modules/Login/reducer';

export const reducer = combineReducers({
	field: fieldReducers,
	flow: dataReducer,
	speed,
	game,
	login: LoginSlice.reducer,
});

export type GameOfLifeState = ReturnType<typeof reducer>;

const SagaMiddleware = createSagaMiddleware();

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
SagaMiddleware.run(loginSaga);
