import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export const getArticlesErrorSelector = (state: StoreSchema) =>
    state?.articlesPage?.error;

export const getIsArticlesLoadingSelector = (state: StoreSchema) =>
    state?.articlesPage?.isLoading;

export const getIsArticlesViewSelector = (state: StoreSchema) =>
    state?.articlesPage?.view;

export const getArticlesLimitSelector = (state: StoreSchema) =>
    state?.articlesPage?.limit;

export const getArticlesPageSelector = (state: StoreSchema) =>
    state?.articlesPage?.page;

export const getIsHasMoreArticleSelector = (state: StoreSchema) =>
    state?.articlesPage?.hasMore;

export const getIsInitArticleDataSelector = (state: StoreSchema) =>
    state?.articlesPage?._init;

export const getArticlesSearchSelector = (state: StoreSchema) =>
    state?.articlesPage?.search || '';

export const getArticlesOrderDataSelector = (state: StoreSchema) =>
    state?.articlesPage?.order || 'asc';

export const getArticleSortDataSelector = (state: StoreSchema) =>
    state?.articlesPage?.sort || ArticleSortField.CREATED;

export const getArticleTypeDataSelector = (state: StoreSchema) =>
    state?.articlesPage?.type || ArticleType.ALL;
