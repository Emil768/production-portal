import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticlesDetailtPage } from '@/pages/ArticlesDetailPage';
import { ArticlesEditPage } from '@/pages/ArticleEditPage';
import { AdminPagePage } from '@/pages/AdminPage';
import { AppRoutes } from '@/shared/types/router';
import {
    getAboutRoute,
    getAdminRoute,
    getArticleCreateRoute,
    getArticleDetailRoute,
    getArticleEditRoute,
    getArticlesRoute,
    getMainRoute,
    getNotFoundRoute,
    getProfileRoute,
} from '@/shared/consts/router';
import { UserRoles } from '@/entities/User';
import { AutRouterProps } from '../types/routeConfig/routeConfig';

export const routeConfig: Record<AppRoutes, AutRouterProps> = {
    [AppRoutes.ADMIN]: {
        path: getAdminRoute(),
        element: <AdminPagePage />,
        isAuth: true,
        roles: [UserRoles.ADMIN, UserRoles.MAGAGER],
    },
    [AppRoutes.MAIN]: {
        path: getMainRoute(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getAboutRoute(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getProfileRoute(':id'),
        element: <ProfilePage />,
        isAuth: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getArticlesRoute(),
        element: <ArticlesPage />,
        isAuth: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: getArticleCreateRoute(),
        element: <ArticlesEditPage />,
        isAuth: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: getArticleEditRoute(':id'),
        element: <ArticlesEditPage />,
        isAuth: true,
    },
    [AppRoutes.ARTICLES_DETAIL]: {
        path: getArticleDetailRoute(':id'),
        element: <ArticlesDetailtPage />,
        isAuth: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: getNotFoundRoute(),
        element: <NotFoundPage />,
    },
};
