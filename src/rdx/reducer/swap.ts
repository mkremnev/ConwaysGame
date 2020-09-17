import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('dataRest', async () => {
	const response = await fetch('https://swapi.dev/api/people/');
	return response.formData;
});

const dataObject = createSlice({
	name: 'dataRest',
	initialState: { ar: {} as [] },
	reducers: {},
	extraReducers: {
		[fetchData.fulfilled.type]: (state, action) => {
			state.ar.push(action.payload as never);
		},
	},
});

export const dataReducer = dataObject.reducer;
export const dataActions = dataObject.actions;
