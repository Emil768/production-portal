import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOption } from 'shared/ui/Select/Select';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleType } from '../../model/types/article';

import cls from './ArticleTypeTabs.module.scss';

interface ArticleSortSelectorProps {
	className?: string;
	type: ArticleType;
	onTabClick: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({ className, type, onTabClick }: ArticleSortSelectorProps) => {
	const { t } = useTranslation();

	const tabsOptions = useMemo<TabItem[]>(() => {
		return [
			{
				content: 'Все',
				value: ArticleType.ALL,
			},
			{
				content: ArticleType.IT,
				value: ArticleType.IT,
			},
			{
				content: 'Экономика',
				value: ArticleType.ECONOMICS,
			},
			{
				content: 'Наука',
				value: ArticleType.SCIENCE,
			},
		];
	}, []);

	const onTabChange = useCallback((value: ArticleType) => {
		onTabClick(value);
	}, []);

	return (
		<div className={classNames(cls.ArticleTypeTabs, {}, [className])}>
			<Tabs tabs={tabsOptions} type={type} onTabClick={onTabChange} />
		</div>
	);
});
