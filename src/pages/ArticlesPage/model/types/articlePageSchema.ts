import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { OrderType } from '@/shared/types/articles';

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
