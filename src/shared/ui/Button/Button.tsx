import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
	CLEAR = 'clear',
	OUTLINE = 'outline',
	CIRCLE = 'circle',
	CIRCLE_BG = 'circle-bg',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const { className, children, theme = ThemeButton.CLEAR, ...otherProps } = props;

	return (
		<button type="button" className={classNames(cls.Button, { [cls[theme]]: true }, [className])} {...otherProps}>
			{children}
		</button>
	);
});
