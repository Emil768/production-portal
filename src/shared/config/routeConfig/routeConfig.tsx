import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticlesDetailtPage } from '@/pages/ArticlesDetailPage';
import { ArticlesEditPage } from '@/pages/ArticleEditPage';
import { AdminPagePage } from '@/pages/AdminPage';
import { UserRoles } from '@/entities/User';

export type AutRouterProps = RouteProps & {
	isAuth?: boolean;
	roles?: UserRoles[];
};

export enum AppRoutes {
	ADMIN = 'admin',
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	NOT_FOUND = 'not_found',
	ARTICLES = 'articles',
	ARTICLES_DETAIL = 'article_detail',
	ARTICLES_EDIT = 'article_edit',
	ARTICLES_CREATE = 'article_create',
}

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

export const routeConfig: Record<AppRoutes, AutRouterProps> = {
	[AppRoutes.ADMIN]: {
		path: RoutePath.admin,
		element: <AdminPagePage />,
		isAuth: true,
		roles: [UserRoles.ADMIN, UserRoles.MAGAGER],
	},
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.PROFILE]: {
		path: `${RoutePath.profile}:id`,
		element: <ProfilePage />,
		isAuth: true,
	},
	[AppRoutes.ARTICLES]: {
		path: RoutePath.articles,
		element: <ArticlesPage />,
		isAuth: true,
	},
	[AppRoutes.ARTICLES_CREATE]: {
		path: RoutePath.article_create,
		element: <ArticlesEditPage />,
		isAuth: true,
	},
	[AppRoutes.ARTICLES_EDIT]: {
		path: RoutePath.article_edit,
		element: <ArticlesEditPage />,
		isAuth: true,
	},
	[AppRoutes.ARTICLES_DETAIL]: {
		path: `${RoutePath.article_detail}:id`,
		element: <ArticlesDetailtPage />,
		isAuth: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
