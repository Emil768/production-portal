import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = () => setIsAuthModal(!isAuthModal);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.RED} to="/about">
					{t('О сайте')}
				</AppLink>
				<Button theme={ThemeButton.CLEAR} onClick={onToggleModal}>
					{t('Войти')}
				</Button>
				<Modal isOpen={isAuthModal} onClose={onToggleModal}>
					{t('Контент')}
				</Modal>
			</div>
		</div>
	);
};
