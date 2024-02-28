import { ArticleView } from 'entities/Article';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
import { OrderType } from 'shared/types/articles';

export interface ArticlePageSchema {
	isLoading: boolean;
	error?: string;
	view: ArticleView;
	ids: [];
	entities: {};
	page: number;
	limit?: number;
	hasMore: boolean;
	sort: ArticleSortField;
	order: OrderType;
	search: string;
	type: ArticleType;
	_init: boolean;
}
