import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import { getIsArticlesLoadingSelector, getIsHasMoreArticleSelector, getPageArticleSelector } from '../../selectors';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesPageData } from '../fetchArticlesData';

export const fetchNextLoadData = createAsyncThunk<void, void, ExtraThunkProps<string>>(
	'articlesPage/fetchNextLoadData',
	async (_, thunkApi) => {
		const { dispatch, getState } = thunkApi;

		const page = getPageArticleSelector(getState());
		const hasMore = getIsHasMoreArticleSelector(getState());
		const isLoading = getIsArticlesLoadingSelector(getState());

		if (hasMore && !isLoading) {
			dispatch(articlesPageActions.setPage(page + 1));
			dispatch(
				fetchArticlesPageData({
					page: page + 1,
				}),
			);
		}
	},
);
