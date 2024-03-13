import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from '@/app/providers/ReduxProvider/config/storeSchema';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import {
	getArticleSortDataSelector,
	getArticleTypeDataSelector,
	getArticlesLimitSelector,
	getArticlesOrderDataSelector,
	getArticlesPageSelector,
	getArticlesSearchSelector,
} from '../../selectors';

interface fetchArticlesPageDataProps {
	replace?: boolean;
}

export const fetchArticlesPageData = createAsyncThunk<Article[], fetchArticlesPageDataProps, ExtraThunkProps<string>>(
	'articlesPage/fetchArticlesPageData',
	async (_, thunkApi) => {
		const { extra, rejectWithValue, getState } = thunkApi;

		const limit = getArticlesLimitSelector(getState());
		const page = getArticlesPageSelector(getState());
		const order = getArticlesOrderDataSelector(getState());
		const sort = getArticleSortDataSelector(getState());
		const search = getArticlesSearchSelector(getState());
		const type = getArticleTypeDataSelector(getState());

		try {
			addQueryParams({
				sort,
				order,
				search,
				type,
			});

			const response = await extra.api.get<Article[]>('/articles', {
				params: {
					_expand: 'user',
					_page: page,
					_limit: limit,
					_order: order,
					_sort: sort,
					type: type === ArticleType.ALL ? undefined : type,
					q: search,
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
