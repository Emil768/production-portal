import { useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { getAuthDataSelector } from 'entities/User/model/selectors/selectors';
import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
	const isAuth = useAppSelector(getAuthDataSelector);

	const routes = useMemo(
		() =>
			Object.values(routeConfig).filter((route) => {
				if (route.isAuth && !isAuth) {
					return false;
				}
				return true;
			}),
		[isAuth],
	);

	return (
		<Routes>
			{routes.map(({ element, path }) => (
				<Route
					key={path}
					path={path}
					element={
						<Suspense fallback={<PageLoader />}>
							<div className="page-wrapper">{element}</div>
						</Suspense>
					}
				/>
			))}
		</Routes>
	);
};

export default AppRouter;
