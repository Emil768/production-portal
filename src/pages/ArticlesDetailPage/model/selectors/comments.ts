import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getArticleCommentsErrorSelector = (state: StoreSchema) => state?.articleDetailsPage?.comments;

export const getIsArticleCommentsLoadingSelector = (state: StoreSchema) =>
	state?.articleDetailsPage?.comments.isLoading;
