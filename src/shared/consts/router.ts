import { AppRoutes } from '../types/router';

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLES_DETAIL]: '/article/',
	[AppRoutes.ARTICLES_CREATE]: '/article/:id/edit',
	[AppRoutes.ARTICLES_EDIT]: '/article/create',

	// админ
	[AppRoutes.ADMIN]: '/admin',
	// последний
	[AppRoutes.NOT_FOUND]: '*',
};
