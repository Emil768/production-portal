import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import { getIsInitArticleDataSelector } from '../../selectors';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesPageData } from '../fetchArticlesData';

export const initFetchArticlesData = createAsyncThunk<void, void, ExtraThunkProps<string>>(
	'articlesPage/initFetchArticlesData',
	async (_, thunkApi) => {
		const { dispatch, getState } = thunkApi;

		const init = getIsInitArticleDataSelector(getState());

		if (!init) {
			dispatch(articlesPageActions.initView());
			dispatch(
				fetchArticlesPageData({
					page: 1,
				}),
			);
		}
	},
);
