import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	RED = 'red',
	ERROR = 'red',
}

export enum TextAlign {
	CENTER = 'align_center',
	LEFT = 'align_left',
	RIGHT = 'align_right',
}

export enum TextSize {
	LARGE = 'large',
	SMALL = 'small',
	TINY = 'tiny',
}

interface TextProps {
	className?: string;
	theme?: TextTheme;
	title?: string;
	text?: string;
	size?: TextSize;
	align?: TextAlign;
}

export const Text = memo(({ className, title, text, align, theme, size }: TextProps) => {
	return (
		<div className={classNames(cls.Text, {}, [cls[theme], cls[size], cls[align], className])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});
