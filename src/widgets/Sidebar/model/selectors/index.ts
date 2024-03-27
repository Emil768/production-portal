import { createSelector } from '@reduxjs/toolkit';
import { getAuthDataSelector } from '@/entities/User/model/selectors/selectors';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import UserIcon from '@/shared/assets/icons/user.svg';
import UserLightIcon from '@/shared/assets/icons/user_light.svg';
import HomeLightIcon from '@/shared/assets/icons/home_light.svg';
import AboutLightIcon from '@/shared/assets/icons/about_light.svg';
import { SidebarItemType } from '../types';
import { RoutePath } from '@/shared/consts/router';

export const getSidebarItemsListSelector = createSelector(getAuthDataSelector, (userAuth) => {
	const sidebarItemsList: SidebarItemType[] = [
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
	];
	if (userAuth) {
		sidebarItemsList.push(
			{
				path: RoutePath.profile + userAuth.id,
				icon: {
					light: UserLightIcon,
					dark: UserIcon,
				},
				text: 'Профиль',
				isAuth: true,
			},
			{
				path: RoutePath.articles,
				icon: {
					light: UserLightIcon,
					dark: UserIcon,
				},
				text: 'Статьи',
				isAuth: true,
			},
		);
	}
	return sidebarItemsList;
});
