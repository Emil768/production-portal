import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import { ArticleType } from 'entities/Article';
import cls from './Tabs.module.scss';

export interface TabItem {
	value: string;
	content: string;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	type: string;
	onTabClick: (tabs: ArticleType) => void;
}

export const Tabs = memo(({ tabs, onTabClick, className, type }: TabsProps) => {
	console.log(type);

	const onTabChange = (tab: ArticleType) => () => {
		onTabClick(tab);
	};
	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{tabs.map((item) => {
				return (
					<div className={cls.tab} onClick={onTabChange(item.value as ArticleType)} key={item.value}>
						{item.content}
					</div>
				);
			})}
		</div>
	);
});
