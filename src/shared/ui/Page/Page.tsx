import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, UIEvent, memo, useEffect, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { uiActions } from 'features/UI';
import { useLocation } from 'react-router-dom';
import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';
import { getUiScrollByPath } from 'features/UI/model/selectors';
import { useThrottle } from 'shared/lib/hooks/userThrottle';
import cls from './Page.module.scss';

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
		<section ref={wrapperRef} onScroll={onScroll} className={classNames(cls.wrapper, {}, [className])}>
			{children}

			{onScrollEnd && <div ref={triggerRef} className={cls.trigger} />}
		</section>
	);
});
