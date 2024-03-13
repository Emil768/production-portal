import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types';

interface NotificationItemProps {
	className?: string;
	notification: Notification;
}

export const NotificationItem = memo(({ className, notification }: NotificationItemProps) => {
	return (
		<div className={classNames(cls.NotificationItem, {}, [className])}>
			<Text title={notification.title} />

			<Text text={notification.description} />
		</div>
	);
});
