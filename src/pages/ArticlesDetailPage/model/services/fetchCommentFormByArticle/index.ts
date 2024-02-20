import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import { getArticleDataSelector } from 'entities/Article/model/selectors';
import { Comment } from 'entities/Comment';
import { getAuthDataSelector } from 'entities/User/model/selectors/selectors';
import i18next from 'i18next';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId';

export const fetchCommentFormByArticle = createAsyncThunk<Comment, string, ExtraThunkProps<string>>(
	'articleDetails/fetchCommentFormByArticle',
	async (text, { extra, getState, dispatch, rejectWithValue }) => {
		try {
			const userData = getAuthDataSelector(getState());
			const articleData = getArticleDataSelector(getState());

			if (!userData || !articleData || !text) {
				throw new Error();
			}

			const response = await extra.api.post<Comment>('/comments', {
				userId: userData.id,
				articleId: articleData.id,
				text,
			});

			dispatch(fetchCommentsByArticleId(articleData.id));

			return response.data;
		} catch (e) {
			return rejectWithValue(i18next.t('Неверный логин или пароль'));
		}
	},
);
