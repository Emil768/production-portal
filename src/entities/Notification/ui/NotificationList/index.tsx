import { memo } from 'react';
import { useGetNotificationListQuery } from '@/entities/Notification/api/notification';
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../NotificationItem';

interface NotificationListProps {
	className?: string;
}

const renderSkeletons = () => {
	return Array(5)
		.fill(0)
		.map((item, index) => {
			return <Skeleton width="100%" height="100px" key={index} className={cls.skeleton} />;
		});
};

export const NotificationList = memo(({ className }: NotificationListProps) => {
	const { t } = useTranslation();
	const { data, isLoading, isError } = useGetNotificationListQuery(null, {
		pollingInterval: 3000,
	});

	if (isLoading) {
		return <div className={classNames(cls.NotificationList, {}, [className])}>{renderSkeletons()}</div>;
	}

	if (isError) {
		return (
			<div>
				<Text text={t('Error')} theme={TextTheme.ERROR} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.NotificationList, {}, [className])}>
			{data?.map((item) => (
				<NotificationItem key={item.id} notification={item} />
			))}
		</div>
	);
});
