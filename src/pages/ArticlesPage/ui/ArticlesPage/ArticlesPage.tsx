import { DynamicReducerWrapper, ReducersList } from '@/shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/store';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page/Page';
import { ArticleList } from '@/entities/Article';
import { useSearchParams } from 'react-router-dom';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { articlesPageReducer, getArticles } from '../../model/slice/articlePageSlice';
import {
	getArticlesErrorSelector,
	getIsArticlesLoadingSelector,
	getIsArticlesViewSelector,
} from '../../model/selectors';
import { fetchNextLoadData } from '../../model/services/fetchNextLoadData';
import { initFetchArticlesData } from '../../model/services/initFetchArticlesData';
import { ArticlePageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
	const { t } = useTranslation('articles');
	const articles = useAppSelector(getArticles.selectAll);
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(getIsArticlesLoadingSelector);
	const error = useAppSelector(getArticlesErrorSelector);
	const view = useAppSelector(getIsArticlesViewSelector);
	const [searchParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		// @ts-ignore
		dispatch(fetchNextLoadData());
	}, [dispatch]);

	useEffect(() => {
		// @ts-ignore
		dispatch(initFetchArticlesData(searchParams));
	}, [dispatch]);

	if (error) {
		return <Text title={t('Не удалось загрузить статьи')} theme={TextTheme.ERROR} />;
	}

	return (
		<DynamicReducerWrapper reducers={reducers} removeAfterUnmounting={false}>
			<Page onScrollEnd={onLoadNextPart}>
				<ArticlePageFilters />
				<ArticleList isLoading={isLoading} view={view} articles={articles} />
			</Page>
		</DynamicReducerWrapper>
	);
};

export default ArticlesPage;
