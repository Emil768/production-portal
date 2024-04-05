import { MouseEvent, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginModal } from '@/features/AuthByUsername';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { userActions, getAuthDataSelector, getIsUserAdminRoleSelector, getIsUserManagerRoleSelector } from '@/entities/User';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { NotificationButton } from '@/features/NotificationButton';

import cls from './Navbar.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const dispatch = useAppDispatch();
	const user = useAppSelector(getAuthDataSelector);
	const [menu, setMenu] = useState(false);
	const isAdminRole = useAppSelector(getIsUserAdminRoleSelector);
	const isManager = useAppSelector(getIsUserManagerRoleSelector);

	const hasAdminRole = isAdminRole || isManager;

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	const onToggleMenu = useCallback((e: MouseEvent<HTMLDivElement>) => {
		setMenu((prev) => !prev);
		e.stopPropagation();
	}, []);

	if (user) {
		return (
			<nav className={classNames(cls.Navbar, {}, [className])}>
				<div className={cls.wrapper}>
					<AppLink className={cls.link} to="/article/create">
						{t('Создать статью')}
					</AppLink>
					<NotificationButton />
					<div className={cls.menu} onClick={onToggleMenu}>
						<Avatar src={user.avatar} alt={t('Аватар пользователя')} size={40} />
						{menu && (
							<ul className={cls.menuList}>
								{hasAdminRole && (
									<li className={cls.menuItem}>
										<AppLink to="/admin" theme={AppLinkTheme.SECONDARY}>
											{t('Админка')}
										</AppLink>
									</li>
								)}
								<li className={cls.menuItem}>
									<AppLink to={`/profile/${user.id}`} theme={AppLinkTheme.SECONDARY}>
										{t('Профиль')}
									</AppLink>
								</li>
								<li className={cls.menuItem}>
									<Button theme={ThemeButton.CLEAR} onClick={onLogout}>
										{t('Выйти')}
									</Button>
								</li>
							</ul>
						)}
					</div>
				</div>
			</nav>
		);
	}

	return (
		<nav className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.wrapper}>
				<Button theme={ThemeButton.CLEAR} onClick={onShowModal}>
					{t('Войти')}
				</Button>
				{isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
			</div>
		</nav>
	);
});
