import { DynamicReducerWrapper, ReducersList } from 'shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Page } from 'shared/ui/Page/Page';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlePageSlice';
import { getArticlesErrorSelector, getIsArticlesLoadingSelector, getIsArticlesViewSelector } from '../model/selectors';
import { fetchNextLoadData } from '../model/services/fetchNextLoadData';
import { initFetchArticlesData } from '../model/services/initFetchArticlesData';

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

	const onViewClick = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
		},
		[dispatch],
	);

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextLoadData());
	}, [dispatch]);

	useEffect(() => {
		dispatch(initFetchArticlesData());
	}, [dispatch]);

	if (error) {
		return <Text title={t('Не удалось загрузить статьи')} theme={TextTheme.ERROR} />;
	}

	return (
		<DynamicReducerWrapper reducers={reducers} removeAfterUnmounting={false}>
			<Page onScrollEnd={onLoadNextPart}>
				<ArticleViewSelector onViewClick={onViewClick} view={view} />
				<ArticleList isLoading={isLoading} view={view} articles={articles} />
			</Page>
		</DynamicReducerWrapper>
	);
};

export default ArticlesPage;
