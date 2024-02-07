import { classNames } from 'shared/lib/classNames/classNames';
import { LoginModal } from 'features/AuthByUsername/ui';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onCloseAuthModal = () => setIsAuthModal(false);

	const onShowAuthModal = () => setIsAuthModal(true);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<Button theme={ThemeButton.CLEAR} onClick={onShowAuthModal}>
					{t('Войти')}
				</Button>
				<LoginModal isOpen={isAuthModal} onClose={onCloseAuthModal} />
			</div>
		</div>
	);
};
