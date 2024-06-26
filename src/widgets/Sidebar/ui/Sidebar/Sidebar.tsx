import { memo, useMemo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Image } from '@/shared/ui/Image';
import { getSidebarItemsListSelector } from '../../model/selectors';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ThemeButton } from '@/shared/ui/Button';
import MenuIcon from '@/shared/assets/icons/menu.svg';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SideBarItem/SideBarItem';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useAppSelector(getSidebarItemsListSelector);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const sidebarItems = useMemo(
        () =>
            sidebarItemsList.map((item) => {
                return (
                    <SidebarItem
                        item={item}
                        key={item.path}
                        collapsed={collapsed}
                    />
                );
            }),
        [collapsed, sidebarItemsList],
    );

    return (
        <menu
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
            >
                <Image sourse={<MenuIcon />} />
            </Button>
            <div className={cls.navigation}>{sidebarItems}</div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </menu>
    );
});
