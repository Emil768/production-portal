import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import { Article } from 'entities/Article';
import { getArticlesLimitSelector } from '../../selectors';

interface fetchArticlesPageDataProps {
	page: number;
}

export const fetchArticlesPageData = createAsyncThunk<Article[], fetchArticlesPageDataProps, ExtraThunkProps<string>>(
	'articlesPage/fetchArticlesPageData',
	async (props, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi;
		const { page } = props;

		const limit = getArticlesLimitSelector(getState());

		try {
			const response = await extra.api.get<Article[]>('/articles', {
				params: {
					_expand: 'user',
					_page: page,
					_limit: limit,
				},
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	},
);
