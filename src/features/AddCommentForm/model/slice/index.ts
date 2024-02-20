import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../types';

const initialState: CommentFormSchema = {
	text: '',
	error: undefined,
};

export const commentFormSlice = createSlice({
	name: 'commentForm',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(fetchCommentForm.pending, (state) => {

	// 			state.error = undefined;
	// 		})
	// 		.addCase(fetchCommentForm.fulfilled, (state, action) => {

	// 			state.formData = action.payload;
	// 		})
	// 		.addCase(fetchCommentForm.rejected, (state, action) => {

	// 			state.error = action.payload;
	// 		});
	// },
});

// Action creators are generated for each case reducer function
export const { actions: commentFormSActions } = commentFormSlice;
export const { reducer: commentFormReducer } = commentFormSlice;
