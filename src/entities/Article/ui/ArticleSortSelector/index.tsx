import { memo, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { OrderType } from 'shared/types/articles';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleSortField, ArticleView } from '../../model/types/article';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: OrderType;
	onSortChange: (value: ArticleSortField) => void;
	onOrderChange: (value: OrderType) => void;
}

export const ArticleSortSelector = memo(
	({ className, sort, order, onOrderChange, onSortChange }: ArticleSortSelectorProps) => {
		const { t } = useTranslation();

		const orderOptions = useMemo<SelectOption<OrderType>[]>(() => {
			return [
				{
					content: 'возрастанию',
					value: 'asc',
				},
				{
					content: 'убыванию',
					value: 'desc',
				},
			];
		}, []);

		const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => {
			return [
				{
					content: 'дате',
					value: ArticleSortField.CREATED,
				},
				{
					content: 'названию',
					value: ArticleSortField.TITLE,
				},
				{
					content: 'просмотрам',
					value: ArticleSortField.VIEWS,
				},
			];
		}, []);

		return (
			<div className={classNames(cls.ArticleSortSelector, {}, [className])}>
				<Select options={sortOptions} value={sort} label={t('Сортировать по')} onChange={onSortChange} />
				<Select options={orderOptions} value={order} label={t('по')} onChange={onOrderChange} />
			</div>
		);
	},
);
