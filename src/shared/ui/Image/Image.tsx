import { classNames } from '@/shared/lib/classNames/classNames';
import React, { ReactNode, memo } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider';
import cls from './Image.module.scss';

interface ImageProps {
	className?: string;
	sourse?: string | ReactNode;
	width?: string;
	height?: string;
	alt?: string;
}

export const Image = memo(({ className, sourse, width, alt, height }: ImageProps) => {
	const { theme } = useTheme();
	return (
		<div
			className={classNames(cls.Image, {}, [cls[theme], className])}
			style={{
				width,
				height,
			}}
		>
			{typeof sourse === 'string' ? <img src={sourse} alt={alt} /> : sourse}
		</div>
	);
});
