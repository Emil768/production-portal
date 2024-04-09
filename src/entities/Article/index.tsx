import { ArticlesDetail } from './ui/ArticleDetails';
import { fetchArticleData } from './model/services/fetchArticleData';
import { ArticleList } from './ui/ArticleList';
import { articleReducer, articleActions } from './model/slice';
import {
    getArticleDataSelector,
    getIsArticleLoadingSelector,
} from './model/selectors';

export {
    ArticlesDetail,
    ArticleList,
    fetchArticleData,
    articleReducer,
    articleActions,
    getArticleDataSelector,
    getIsArticleLoadingSelector,
};

export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
export type { Article, ArticleBlock } from './model/types/article';

export {
    ArticleBlockType,
    ArticleSortField,
    ArticleType,
    ArticleView,
} from './model/consts';
