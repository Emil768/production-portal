import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getArticleCommentsErrorSelector = (state: StoreSchema) => state?.article_comments?.error;

export const getIsArticleCommentsLoadingSelector = (state: StoreSchema) => state?.article_comments?.isLoading;
