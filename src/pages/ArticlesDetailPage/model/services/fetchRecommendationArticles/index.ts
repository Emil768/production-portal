import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from '@/app/providers/ReduxProvider/config/storeSchema';
import { Article } from '@/entities/Article';

export const fetchRecommendationArticles = createAsyncThunk<Article[], void, ExtraThunkProps<string>>(
	'articleDetails/fetchRecommendationArticles',
	async (_, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.get<Article[]>('/articles', {
				params: {
					_limit: 4,
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
