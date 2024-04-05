import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Comment } from '../../model/types';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = memo(({ className, isLoading, comments }: CommentListProps) => {
	const { t } = useTranslation('articles');

	if (isLoading) {
		return (
			<div>
				<div className={cls.comment_header}>
					<Skeleton width={60} height={60} circle />
					<Skeleton width={100} height={20} />
				</div>
				<Skeleton width="100%" height={50} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length ? (
				comments.map((comment) => <CommentCard comment={comment} key={comment.id} />)
			) : (
				<Text text={t('Комментарии отсутствуют')} />
			)}
		</div>
	);
});
