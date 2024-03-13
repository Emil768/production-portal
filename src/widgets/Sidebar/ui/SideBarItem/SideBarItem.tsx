import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/app/providers/ReduxProvider/config/store';
import { getAuthDataSelector } from '@/entities/User/model/selectors/selectors';
import { SidebarItemType } from '@/widgets/Sidebar/model/types';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	className?: string;
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo(({ className, item, collapsed }: SidebarItemProps) => {
	const { t } = useTranslation();
	const { theme } = useTheme();
	const isAuth = useAppSelector(getAuthDataSelector);

	if (item.isAuth && !isAuth) {
		return null;
	}

	return (
		<aside className={classNames(cls.SidebarItem, { [cls.collapsed]: collapsed }, [className])}>
			<AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={cls.link}>
				{theme === Theme.DARK ? (
					<item.icon.dark className={cls.icon} />
				) : (
					<item.icon.light className={cls.icon} />
				)}
				<span className={cls.text}>{t(`${item.text}`)}</span>
			</AppLink>
		</aside>
	);
});
