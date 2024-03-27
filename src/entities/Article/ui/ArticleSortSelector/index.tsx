import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { OrderType } from '@/shared/types/articles';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleSortField } from '../../model/consts';
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
		const { t } = useTranslation('articles');

		const orderOptions = useMemo<SelectOption[]>(() => {
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

		const sortOptions = useMemo<SelectOption[]>(() => {
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
			(sort: string) => {
				onSortChange(sort as ArticleSortField);
			},
			[onSortChange],
		);

		const onChangeOrderHandler = useCallback(
			(order: string) => {
				onOrderChange(order as OrderType);
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
