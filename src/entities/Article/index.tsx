import { ArticlesDetail } from './ui/ArticleDetails';
import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { Article } from './model/types/article';
import { fetchArticleData } from './model/services/fetchArticleData';
import { articleReducer, articleActions } from './model/slice';

export { ArticlesDetail, ArticleDetailsSchema, Article, fetchArticleData, articleReducer, articleActions };
