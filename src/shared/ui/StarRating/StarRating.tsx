import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Image } from '../Image/Image';
import StarIcon from '../../assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    size: number;
    onSelect?: (count: number) => void;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(
    ({ className, size, onSelect, selectedStars = 0 }: StarRatingProps) => {
        const [currentStarsCount, setCurrentStarsCount] =
            useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const onHover = (starsCount: number) => () => {
            if (!isSelected) {
                setCurrentStarsCount(starsCount);
            }
        };

        const onLeave = () => {
            if (!isSelected) {
                setCurrentStarsCount(0);
            }
        };

        const onClick = (starsCount: number) => () => {
            if (!isSelected) {
                onSelect?.(starsCount);
                setCurrentStarsCount(starsCount);
                setIsSelected(true);
            }
        };
        return (
            <div className={classNames(cls.StarRating, {}, [className])}>
                {stars.map((star) => (
                    <Image
                        className={classNames(
                            cls.starIcon,
                            { [cls.selected]: isSelected },
                            [
                                currentStarsCount >= star
                                    ? cls.hovered
                                    : cls.normal,
                            ],
                        )}
                        sourse={<StarIcon />}
                        key={star}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(star)}
                        onClick={onClick(star)}
                    />
                ))}
            </div>
        );
    },
);
