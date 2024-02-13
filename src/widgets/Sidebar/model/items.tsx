import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MenuIcon from 'shared/assets/icons/menu.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import UserIcon from 'shared/assets/icons/user.svg';
import UserLightIcon from 'shared/assets/icons/user_light.svg';
import HomeLightIcon from 'shared/assets/icons/home_light.svg';
import AboutLightIcon from 'shared/assets/icons/about_light.svg';

export interface SidebarItemType {
	path: string;
	icon: {
		dark: React.VFC<React.SVGProps<SVGSVGElement>>;
		light: React.VFC<React.SVGProps<SVGSVGElement>>;
	};
	text: string;
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		icon: {
			light: HomeLightIcon,
			dark: HomeIcon,
		},
		text: 'Главная',
	},
	{
		path: RoutePath.about,
		icon: {
			light: AboutLightIcon,
			dark: AboutIcon,
		},
		text: 'О сайте',
	},
	{
		path: RoutePath.profile,
		icon: {
			light: UserLightIcon,
			dark: UserIcon,
		},
		text: 'Профиль',
	},
];
