import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum CheckState {
	initiated,
	succeed,
	failed,
}

interface State {
	username: string;
	status?: CheckState;
}

export const initialState: State = {
	username: '',
	status: CheckState.initiated,
};

export const LoginSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		login: (state, { payload }: PayloadAction<string>) => {
			if (payload.length > 3) {
				return { status: CheckState.succeed, username: payload };
			}
			return state;
		},
		logout: () => ({
			username: '',
			status: CheckState.failed,
		}),
	},
});

export const { reducer, actions } = LoginSlice;
