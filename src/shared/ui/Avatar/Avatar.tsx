import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = ({ className, src, alt, size }) => {
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        };
    }, [size]);

    return (
        <div className={classNames(cls.Avatar, {}, [className])} style={styles}>
            <img src={src} alt={alt} />
        </div>
    );
};
