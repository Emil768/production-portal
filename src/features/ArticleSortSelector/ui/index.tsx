import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from '@/shared/ui/Select';
import { OrderType } from '@/shared/types/articles';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: OrderType;
	onSortChange: (value: ArticleSortField) => void;
	onOrderChange: (value: OrderType) => void;
}

export const ArticleSortSelector = memo(
	({ className, sort, order, onOrderChange, onSortChange }: ArticleSortSelectorProps) => {
		const { t } = useTranslation('articles');

		const orderOptions = useMemo<SelectOption<OrderType>[]>(() => {
			return [
				{
					content: `${t('возрастанию')}`,
					value: 'asc',
				},
				{
					content: `${t('убыванию')}`,
					value: 'desc',
				},
			];
		}, []);

		const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(() => {
			return [
				{
					content: `${t('дате')}`,
					value: ArticleSortField.CREATED,
				},
				{
					content: `${t('названию')}`,
					value: ArticleSortField.TITLE,
				},
				{
					content: `${t('просмотрам')}`,
					value: ArticleSortField.VIEWS,
				},
			];
		}, []);

		const onChangeSortHandler = useCallback(
			(sort: ArticleSortField) => {
				onSortChange(sort);
			},
			[onSortChange],
		);

		const onChangeOrderHandler = useCallback(
			(order: OrderType) => {
				onOrderChange(order);
			},
			[onOrderChange],
		);

		return (
			<div className={classNames(cls.ArticleSortSelector, {}, [className])}>
				<Select
					options={sortOptions}
					value={sort}
					label={t('Сортировать по')}
					onChange={onChangeSortHandler}
					className={cls.select}
				/>
				<Select
					options={orderOptions}
					value={order}
					label={t('по')}
					onChange={onChangeOrderHandler}
					className={cls.select}
				/>
			</div>
		);
	},
);
