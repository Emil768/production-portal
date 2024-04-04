import React, { ImgHTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Image.module.scss';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

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
