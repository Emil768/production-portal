import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './ArticleDetailCommentsSlice';
import { articleDetailsRecommendationReducer } from './ArticleDetailRecommendationSlice';

export const ArticleDetailPageReducer = combineReducers({
	comments: articleDetailsCommentsReducer,
	recommendation: articleDetailsRecommendationReducer,
});
