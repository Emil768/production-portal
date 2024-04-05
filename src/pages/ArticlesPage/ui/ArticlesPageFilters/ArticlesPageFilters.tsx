import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { articlesPageActions } from '../../model/slice/articlePageSlice';
import {
	ArticleSortField,
	ArticleSortSelector,
	ArticleType,
	ArticleTypeTabs,
	ArticleView,
	ArticleViewSelector,
} from '@/entities/Article';
import {
	getArticleSortDataSelector,
	getArticleTypeDataSelector,
	getArticlesOrderDataSelector,
	getArticlesSearchSelector,
	getIsArticlesViewSelector,
} from '../../model/selectors';
import { OrderType } from '@/shared/types/articles';
import { Input, InputTheme } from '@/shared/ui/Input';
import { fetchArticlesPageData } from '../../model/services/fetchArticlesData';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import cls from './ArticlesPageFilters.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

interface ArticlePageFiltersProps {
	className?: string;
}

export const ArticlePageFilters = ({ className }: ArticlePageFiltersProps) => {
	const { t } = useTranslation('articles');
	const dispatch = useAppDispatch();
	const view = useAppSelector(getIsArticlesViewSelector);
	const sort = useAppSelector(getArticleSortDataSelector);
	const order = useAppSelector(getArticlesOrderDataSelector);
	const search = useAppSelector(getArticlesSearchSelector);
	const type = useAppSelector(getArticleTypeDataSelector);

	const fetchData = useCallback(() => {
		// @ts-ignore
		dispatch(fetchArticlesPageData({ replace: true }));
	}, [dispatch]);

	const debounceFetchData = useDebounce(fetchData, 500);

	const onViewClick = useCallback(
		(view: ArticleView) => {
			dispatch(articlesPageActions.setView(view));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	const onSortChange = useCallback(
		(value: ArticleSortField) => {
			dispatch(articlesPageActions.setSort(value));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	const onOrderChange = useCallback(
		(value: OrderType) => {
			dispatch(articlesPageActions.setOrder(value));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	const onSearchChange = useCallback(
		(value: string) => {
			dispatch(articlesPageActions.setSearch(value));
			dispatch(articlesPageActions.setPage(1));
			debounceFetchData();
		},
		[dispatch, debounceFetchData],
	);

	const onTabClick = useCallback(
		(value: ArticleType) => {
			dispatch(articlesPageActions.setType(value));
			dispatch(articlesPageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData],
	);

	return (
		<div className={classNames(cls.ArticlePageFilters, {}, [className])}>
			<div className={cls.wrapper}>
				<ArticleSortSelector
					sort={sort}
					order={order}
					onSortChange={onSortChange}
					onOrderChange={onOrderChange}
				/>
				<ArticleViewSelector onViewClick={onViewClick} view={view} />
			</div>
			<Input
				value={search}
				onChange={onSearchChange}
				theme={InputTheme.CIRCLE}
				className={cls.input}
				placeholder={t('Поиск')}
			/>
			<ArticleTypeTabs type={type} onTabClick={onTabClick} />
		</div>
	);
};
