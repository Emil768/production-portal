import i18next from 'i18next';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from '@/app/providers/ReduxProvider/config/storeSchema';
import { Article } from '../../types/article';

export const fetchArticleData = createAsyncThunk<
    Article,
    string,
    ExtraThunkProps<string>
>('article/fetchArticleData', async (articleId, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: 'user',
                },
            },
        );

        if (!response.data) {
            return rejectWithValue(i18next.t('Не удалось загрузить статью'));
        }

        return response.data;
    } catch (e) {
        return rejectWithValue(i18next.t('Что-то пошло не так...'));
    }
});
