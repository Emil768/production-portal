import { ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';

export interface TabItem {
	value: string;
	content: ReactNode;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	type: string;
	onTabClick: (tabs: TabItem) => void;
}

export const Tabs = memo(({ tabs, onTabClick, className, type }: TabsProps) => {
	const onTabChange = (value: TabItem) => () => {
		onTabClick(value);
	};
	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{tabs.map((item) => {
				return (
					<div
						className={[cls.tab, type === item.value && cls.active].join(' ').trim()}
						onClick={onTabChange(item)}
						key={item.value}
					>
						{item.content}
					</div>
				);
			})}
		</div>
	);
});
