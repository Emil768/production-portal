import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';
import { Article } from 'entities/Article';
import { ArticleDetailsRecommendationSchema } from '../types/articleDetailPageRecommendation';
import { fetchRecommendationArticles } from '../services/fetchRecommendationArticles';

const articleRecommendationAdapter = createEntityAdapter({
	selectId: (articleRecommendation: Article) => articleRecommendation.id,
});

export const getArticleRecommendations = articleRecommendationAdapter.getSelectors<StoreSchema>(
	(state) => state.articleDetailsPage.recommendation || articleRecommendationAdapter.getInitialState(),
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
	extraReducers: (builder) => {
		builder
			.addCase(fetchRecommendationArticles.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchRecommendationArticles.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false;
				articleRecommendationAdapter.setAll(state, action.payload);
			})
			.addCase(fetchRecommendationArticles.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: articleDetailsRecommendationReducer } = articleDetailsRecommendationSlice;
