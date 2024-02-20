import { ArticlesDetail } from './ui/ArticleDetails';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { Article, ArticleView, ArticleTextBlock } from './model/types/article';
import { fetchArticleData } from './model/services/fetchArticleData';
import { ArticleList } from './ui/ArticleList';

import { articleReducer, articleActions } from './model/slice';

export {
	ArticlesDetail,
	ArticleList,
	ArticleView,
	ArticleDetailsSchema,
	Article,
	fetchArticleData,
	articleReducer,
	articleActions,
	ArticleTextBlock,
};
