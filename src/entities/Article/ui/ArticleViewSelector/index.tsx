import { memo } from 'react';
import GridIcon from '@/shared/assets/icons/grid.svg';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Image } from '@/shared/ui/Image';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	className?: string;
	view?: ArticleView;
	onViewClick: (view: ArticleView) => void;
}

export const viewTypes = [
	{
		icon: GridIcon,
		type: ArticleView.MULT,
	},
	{
		icon: MenuIcon,
		type: ArticleView.FULL,
	},
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
	const onClick = (view: ArticleView) => () => onViewClick(view);

	return (
		<div className={classNames(cls.ArticleViewSelector, {}, [className])}>
			{viewTypes.map((item) => {
				return (
					<Button
						key={item.type}
						onClick={onClick(item.type)}
						theme={ThemeButton.CLEAR}
						className={classNames(cls.button, { [cls.noActive]: item.type !== view }, [])}
					>
						<Image sourse={<item.icon />} className={cls.image} />
					</Button>
				);
			})}
		</div>
	);
});
