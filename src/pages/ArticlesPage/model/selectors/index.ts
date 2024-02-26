import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getArticlesErrorSelector = (state: StoreSchema) => state?.articlesPage?.error;

export const getIsArticlesLoadingSelector = (state: StoreSchema) => state?.articlesPage?.isLoading;

export const getIsArticlesViewSelector = (state: StoreSchema) => state?.articlesPage?.view;

export const getArticlesLimitSelector = (state: StoreSchema) => state?.articlesPage?.limit;

export const getPageArticleSelector = (state: StoreSchema) => state?.articlesPage?.page;

export const getIsHasMoreArticleSelector = (state: StoreSchema) => state?.articlesPage?.hasMore;

export const getIsInitArticleDataSelector = (state: StoreSchema) => state?.articlesPage?._init;
