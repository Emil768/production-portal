import { useTranslation } from 'react-i18next';
import { Avatar } from '@/shared/ui/Avatar';
import { Text, TextSize } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { Comment } from '../../model/types';
import cls from './CommentCard.module.scss';
import { getProfileRoute } from '@/shared/consts/router';

interface CommentCardProps {
	comment: Comment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
	const { t } = useTranslation('articles');
	return (
		<div className={cls.CommentCard}>
			<AppLink to={getProfileRoute(comment.user.id)} className={cls.comment_header}>
				{comment.user.avatar && <Avatar src={comment.user.avatar} size={60} alt={t('Аватар пользователя')} />}
				<Text text={comment.user.username} size={TextSize.SMALL} />
			</AppLink>
			<Text text={comment.text} />
		</div>
	);
};
