import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticlesDetailtPage } from '@/pages/ArticlesDetailPage';
import { ArticlesEditPage } from '@/pages/ArticleEditPage';
import { AdminPagePage } from '@/pages/AdminPage';
import { AppRoutes } from '@/shared/types/router';
import { AutRouterProps } from '@/shared/config/routeConfig/routeConfig';
import { RoutePath } from '@/shared/consts/router';
import { UserRoles } from '@/entities/User';

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
