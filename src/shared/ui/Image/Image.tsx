import React, { ImgHTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import cls from './Image.module.scss';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	sourse?: string | ReactNode;
	width?: string | number;
	height?: string | number;
	alt?: string;
}

export const Image = memo(({ className, sourse, width, alt, height, ...otherProps }: ImageProps) => {
	const { theme } = useTheme();
	return (
		<div
			className={classNames(cls.Image, {}, [cls[theme], className])}
			style={{
				width,
				height,
			}}
			{...otherProps}
		>
			{typeof sourse === 'string' ? <img src={sourse} alt={alt} /> : sourse}
		</div>
	);
});
