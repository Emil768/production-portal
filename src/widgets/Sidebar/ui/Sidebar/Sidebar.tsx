import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import MenuIcon from 'shared/assets/icons/menu.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeLightIcon from 'shared/assets/icons/home_light.svg';
import AboutLightIcon from 'shared/assets/icons/about_light.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState(false);
	const { theme } = useTheme();

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
			<Button data-testid="sidebar-toggle" onClick={onToggle} theme={ThemeButton.CIRCLE_BG}>
				<MenuIcon />
			</Button>
			<div className={cls.navigation}>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.link}>
					{theme === Theme.DARK ? <HomeIcon className={cls.icon} /> : <HomeLightIcon className={cls.icon} />}
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={cls.link}>
					{theme === Theme.DARK ? (
						<AboutIcon className={cls.icon} />
					) : (
						<AboutLightIcon className={cls.icon} />
					)}
					{t('О сайте')}
				</AppLink>
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};
