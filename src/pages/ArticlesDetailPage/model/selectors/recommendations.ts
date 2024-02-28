import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getArticleRecommendationsErrorSelector = (state: StoreSchema) => state?.articleDetailsPage?.recommendation;

export const getIsArticleRecommendationsLoadingSelector = (state: StoreSchema) =>
	state?.articleDetailsPage?.recommendation.isLoading;
