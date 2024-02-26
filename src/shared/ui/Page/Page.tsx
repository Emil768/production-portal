import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, memo, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import cls from './Page.module.scss';

interface PageProps {
	className?: string;
	children?: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

	useInfinityScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	});

	return (
		<section ref={wrapperRef} className={classNames(cls.wrapper, {}, [className])}>
			{children}

			<div ref={triggerRef} />
		</section>
	);
});
