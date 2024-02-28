import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getArticleCommentsErrorSelector = (state: StoreSchema) => state?.articleDetailsPage?.comments.error;

export const getIsArticleCommentsLoadingSelector = (state: StoreSchema) =>
	state?.articleDetailsPage?.comments.isLoading;
