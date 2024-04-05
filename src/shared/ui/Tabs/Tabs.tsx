import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
	value: T;
	content: ReactNode;
}

interface TabsProps<T extends string> {
	className?: string;
	tabs: TabItem<T>[];
	type: string;
	onTabClick: (tabs: T) => void;
}

export const Tabs = <T extends string>({ tabs, onTabClick, className, type }: TabsProps<T>) => {
	const onTabChange = (value: T) => () => {
		onTabClick(value);
	};
	return (
		<div className={classNames(cls.Tabs, {}, [className])}>
			{tabs.map((item) => {
				return (
					<div
						className={[cls.tab, type === item.value && cls.active].join(' ').trim()}
						onClick={onTabChange(item.value)}
						key={item.value}
					>
						{item.content}
					</div>
				);
			})}
		</div>
	);
};
