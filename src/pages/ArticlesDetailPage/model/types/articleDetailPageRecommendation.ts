import { Article } from 'entities/Article';

export interface ArticleDetailsRecommendationSchema {
	isLoading?: boolean;
	error?: string;
	articles: Article[];
	ids: [];
	entities: {};
}
