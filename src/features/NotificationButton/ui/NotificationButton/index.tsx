import { MouseEvent, memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Image } from '@/shared/ui/Image/Image';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationListProps {
	className?: string;
}

export const NotificationButton = memo(({ className }: NotificationListProps) => {
	const [active, setActive] = useState(false);

	const onToggleMenu = useCallback((e: MouseEvent<HTMLButtonElement>) => {
		setActive((prev) => !prev);
		e.stopPropagation();
	}, []);

	return (
		<div className={classNames(cls.NotificationButton, {}, [className])}>
			<Button theme={ThemeButton.CLEAR} onClick={onToggleMenu}>
				<Image sourse={<NotificationIcon />} className={cls.image} />
			</Button>

			{active ? (
				<div className={cls.popup}>
					<NotificationList />
				</div>
			) : null}
		</div>
	);
});
