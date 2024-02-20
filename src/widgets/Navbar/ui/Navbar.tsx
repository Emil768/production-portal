import { classNames } from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUsername/ui';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getAuthDataSelector } from 'entities/User/model/selectors/selectors';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { userActions } from 'entities/User/model/slice';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const dispatch = useAppDispatch();
	const isAuth = useAppSelector(getAuthDataSelector);

	const onCloseAuthModal = () => setIsAuthModal(false);

	const onShowAuthModal = () => setIsAuthModal(true);

	const onLogout = () => dispatch(userActions.logout());

	if (isAuth) {
		return (
			<div className={classNames(cls.Navbar, {}, [className])}>
				<div className={cls.links}>
					<Button theme={ThemeButton.CLEAR} onClick={onLogout}>
						{t('Выйти')}
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<Button theme={ThemeButton.CLEAR} onClick={onShowAuthModal}>
					{t('Войти')}
				</Button>
				{isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />}
			</div>
		</div>
	);
});
