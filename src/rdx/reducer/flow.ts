import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data', async () => {
	const response = await fetch('https://swapi.dev/api/people/').then(
		(data) => {
			return data.json();
		},
	);
	return response.results;
});

type SwapState = {
	data: object[];
	loading: boolean;
	error: string | null;
};

const defaultState: SwapState = {
	data: [],
	loading: false,
	error: null,
};

const dataObject = createSlice({
	name: 'dataRest',
	initialState: defaultState,
	reducers: {},
	extraReducers: {
		[fetchData.pending.type]: (state) => {
			if (!state.loading) state.loading = !state.loading;
		},

		[fetchData.fulfilled.type]: (state, action) => {
			if (state.loading) state.loading = !state.loading;
			state.data.push(...action.payload);
		},

		[fetchData.rejected.type]: (state, action) => {
			if (state.loading) state.loading = !state.loading;
			state.error = action.error.message;
		},
	},
});

export const dataReducer = dataObject.reducer;
export const dataActions = dataObject.actions;
