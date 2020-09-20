import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reducer } from './reducer/index';

export const store = configureStore({
	reducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [
				'field/clearBoard',
				'field/updateBoard',
				'field/isGame',
				'gameRun',
			],
		},
	}),
});
