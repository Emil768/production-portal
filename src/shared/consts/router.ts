export const getMainRoute = () => '/';
export const getAboutRoute = () => '/about';
export const getProfileRoute = (id: string) => `/profile/${id}`;
export const getArticlesRoute = () => '/articles';
export const getArticleDetailRoute = (id: string) => `/article/${id}`;
export const getArticleEditRoute = (id: string) => `/article/${id}/edit`;
export const getArticleCreateRoute = () => '/article/create';
export const getAdminRoute = () => '/admin';
export const getNotFoundRoute = () => '*';
