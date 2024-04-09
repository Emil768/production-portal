import { createAsyncThunk } from '@reduxjs/toolkit';
import { OrderType } from '@/shared/types/articles';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { ExtraThunkProps } from '@/app/providers/ReduxProvider/config/storeSchema';
import { getIsInitArticleDataSelector } from '../../selectors';
import { articlesPageActions } from '../../slice/articlePageSlice';
import { fetchArticlesPageData } from '../fetchArticlesData';

export const initFetchArticlesData = createAsyncThunk<
    void,
    URLSearchParams,
    ExtraThunkProps<string>
>('articlesPage/initFetchArticlesData', async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;

    const init = getIsInitArticleDataSelector(getState());

    if (!init) {
        const orderFromUrl = searchParams.get('order') as OrderType;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');
        const type = searchParams.get('type') as ArticleType;

        if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
        }

        if (searchFromUrl) {
            dispatch(articlesPageActions.setSearch(searchFromUrl));
        }

        if (type) {
            dispatch(articlesPageActions.setType(type));
        }

        dispatch(articlesPageActions.initView());
        dispatch(fetchArticlesPageData({}));
    }
});
