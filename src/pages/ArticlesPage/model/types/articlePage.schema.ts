import { ArticleView } from 'entities/Article';

export interface ArticlePageSchema {
	isLoading: boolean;
	error?: string;
	view: ArticleView;
	ids: [];
	entities: {};
	page: number;
	limit?: number;
	hasMore: boolean;
}
