import {
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';
import {
    ArticleSortField,
    ArticleType,
    Article,
    ArticleView,
} from '@/entities/Article';
import { OrderType } from '@/shared/types/articles';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticlesPageData } from '../services/fetchArticlesData';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article: Article) => article.id,
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
        _init: false,
        order: 'asc',
        sort: ArticleSortField.CREATED,
        search: '',
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem('view', action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setOrder: (state, action: PayloadAction<OrderType>) => {
            state.order = action.payload;
        },
        initView: (state) => {
            const view = localStorage.getItem('view') as ArticleView;
            state.view = view;

            state.limit = view === ArticleView.FULL ? 4 : 9;
            state._init = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesPageData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesPageData.fulfilled, (state, action) => {
                state.isLoading = false;
                if (state.limit) {
                    state.hasMore = action.payload.length >= state.limit;
                }
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesPageData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
