import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	error: null,
	data: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state, action) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchProfileData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = true;
				state.error = action.payload;
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
