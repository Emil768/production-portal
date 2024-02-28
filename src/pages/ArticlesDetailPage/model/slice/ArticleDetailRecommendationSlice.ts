import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';
import { Article } from 'entities/Article';
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailPageRecommendation';

const articleRecommendationAdapter = createEntityAdapter({
	selectId: (articleRecommendation: Article) => articleRecommendation.id,
});

export const getArticleComments = articleRecommendationAdapter.getSelectors<StoreSchema>(
	(state) => state.article_comments || articleRecommendationAdapter.getInitialState(),
);

const articleDetailsRecommendationSlice = createSlice({
	name: 'articleDetailsRecommendationSlice',
	initialState: articleRecommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
		articles: null,
	}),
	reducers: {},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(fetchCommentsByArticleId.pending, (state) => {
	// 			state.error = undefined;
	// 			state.isLoading = true;
	// 		})
	// 		.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
	// 			state.isLoading = false;
	// 			articleRecommendationAdapter.setAll(state, action.payload);
	// 		})
	// 		.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
	// 			state.isLoading = false;
	// 			state.error = action.payload;
	// 		});
	// },
});

export const { reducer: articleDetailsRecommendationReducer } = articleDetailsRecommendationSlice;
