import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	RED = 'red',
	ERROR = 'red',
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
}

export const Text = memo(({ className, title, text, theme, size }: TextProps) => {
	console.log('size', cls[size], size);
	return (
		<div className={classNames(cls.Text, {}, [cls[theme], cls[size], className])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});
