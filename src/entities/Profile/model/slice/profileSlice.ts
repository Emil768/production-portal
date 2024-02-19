import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema, ValidationErroProfile } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfile } from '../services/updateProfileData';

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	error: null,
	data: null,
	formData: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadOnly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		setUpdateData: (state, action: PayloadAction<Profile>) => {
			state.formData = {
				...state.formData,
				...action.payload,
			};
		},
		cancelEdit: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
			state.formData = state.data;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(fetchProfileData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})

			// update

			.addCase(updateProfile.pending, (state) => {
				state.isLoading = true;
				state.error = undefined;
			})
			.addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.formData = action.payload;
				state.readonly = true;
				state.validateErrors = null;
			})
			.addCase(updateProfile.rejected, (state, action: PayloadAction<ValidationErroProfile>) => {
				state.isLoading = false;
				if (action.payload.error) {
					state.error = action.payload.error;
				} else {
					state.validateErrors = action.payload;
				}
			});
	},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
