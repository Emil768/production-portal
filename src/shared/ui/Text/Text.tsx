import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	RED = 'red',
}

interface TextProps {
	className?: string;
	theme?: TextTheme;
	title?: string;
	text?: string;
}

export const Text = memo(({ className, title, text, theme }: TextProps) => (
	<div className={classNames(cls.Text, {}, [cls[theme], className])}>
		{title && <p className={cls.title}>{title}</p>}
		{text && <p className={cls.text}>{text}</p>}
	</div>
));
