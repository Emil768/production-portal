import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Text } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { Button, ThemeButton } from '@/shared/ui/Button';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        onAccept,
        feedbackTitle,
        hasFeedback,
        onCancel,
        title,
        rate,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate || 0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    return (
        <div className={classNames(cls.RatingCard, {}, [className])}>
            <div>
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating
                    size={40}
                    selectedStars={starsCount}
                    onSelect={onSelectStars}
                />
            </div>
            <Modal isOpen={isModalOpen} lazy>
                <Text title={feedbackTitle} />
                <Input
                    value={feedback}
                    onChange={setFeedback}
                    placeholder={t('Ваш отзыв')}
                />
                <Button onClick={cancelHandle} theme={ThemeButton.OUTLINE}>
                    {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandle}>{t('Отправить')}</Button>
            </Modal>
        </div>
    );
});
