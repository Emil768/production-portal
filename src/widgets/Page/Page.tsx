import { MutableRefObject, ReactNode, UIEvent, memo, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll';
import { uiActions } from '@/features/UI';
import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';
import { getUiScrollByPath } from '@/features/UI/model/selectors';
import { useThrottle } from '@/shared/lib/hooks/userThrottle';
import cls from './Page.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

interface PageProps {
	className?: string;
	children?: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
	const dispatch = useAppDispatch();
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const { pathname } = useLocation();
	const scrollPosition = useAppSelector((state: StoreSchema) => getUiScrollByPath(state, pathname));

	useInfinityScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	});

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(
			uiActions.setScroll({
				path: pathname,
				position: e.currentTarget.scrollTop,
			}),
		);
	}, 2000);

	useEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	}, [scrollPosition]);

	return (
		<main ref={wrapperRef} onScroll={onScroll} className={classNames(cls.wrapper, {}, [className])}>
			{children}

			{onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
		</main>
	);
});
