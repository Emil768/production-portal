import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    width: number | string;
    height: number | string;
    circle?: boolean;
}

export const Skeleton = memo(
    ({ className, width, height, circle }: SkeletonProps) => {
        return (
            <div
                className={classNames(cls.Skeleton, { [cls.circle]: circle }, [
                    className,
                ])}
                style={{ width, height }}
            />
        );
    },
);
