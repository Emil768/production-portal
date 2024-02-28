import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailCommentsSlice';
import { articleDetailsRecommendationReducer } from './ArticleDetailRecommendationSlice';

export const ArticleDetailPageReducer = combineReducers<ArticleDetailsPageSchema>({
	comments: articleDetailsCommentsReducer,
	recommendation: articleDetailsRecommendationReducer,
});
