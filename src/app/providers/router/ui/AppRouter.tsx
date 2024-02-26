import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AutRouterProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AutRouterProps) => {
		const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.isAuth ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		);
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
