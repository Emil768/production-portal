import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';
import { Article, ArticleView } from 'entities/Article';
import { ArticlePageSchema } from '../types/articlePage.schema';
import { fetchArticlesPageData } from '../services/fetchArticlesData';

const articlesAdapter = createEntityAdapter({
	selectId: (comment: Article) => comment.id,
});

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
	(state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
	name: 'articlesPageSlice',
	initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
		isLoading: false,
		error: undefined,
		ids: [],
		entities: {},
		view: ArticleView.MULT,
		page: 1,
		hasMore: true,
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload;
			localStorage.setItem('view', action.payload);
		},
		setPage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		initView: (state) => {
			const view = localStorage.getItem('view') as ArticleView;
			state.view = view;

			state.limit = view === ArticleView.FULL ? 4 : 9;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesPageData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticlesPageData.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false;
				articlesAdapter.addMany(state, action.payload);
				state.hasMore = action.payload.length > 0;
			})
			.addCase(fetchArticlesPageData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
