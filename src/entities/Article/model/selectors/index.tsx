import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getArticleDataSelector = (state: StoreSchema) => state?.article?.data;

export const getArticleErrorSelector = (state: StoreSchema) => state?.article?.error;

export const getIsArticleLoadingSelector = (state: StoreSchema) => state?.article?.isLoading;
