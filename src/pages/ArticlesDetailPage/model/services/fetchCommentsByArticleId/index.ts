import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ExtraThunkProps<string>>(
	'articleDetails/fetchCommentsByArticleId',
	async (articleId, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		if (!articleId) {
			return rejectWithValue('error');
		}

		try {
			const response = await extra.api.get<Comment[]>('/comments', {
				params: {
					articleId,
					_expand: 'user',
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
