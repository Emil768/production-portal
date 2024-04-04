import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { getAuthDataSelector } from '@/entities/User/model/selectors/selectors';
import { SidebarItemType } from '../../model/types';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';
import cls from './SidebarItem.module.scss';
import { Theme } from '@/shared/consts/theme';

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
