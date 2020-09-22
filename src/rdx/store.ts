import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducer/index';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from '@/sagas/saga';

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

SagaMiddleware.run(helloSaga);
