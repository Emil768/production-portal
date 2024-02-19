import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleData } from '../services/fetchArticleData';

const initialState: ArticleDetailsSchema = {
	isLoading: false,
	error: null,
	data: null,
};

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleData.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(fetchArticleData.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(fetchArticleData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
