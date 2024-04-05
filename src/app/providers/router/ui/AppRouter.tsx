import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AutRouterProps } from '../../../providers/router/types/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routerConfig';

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AutRouterProps) => {
		const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.isAuth ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
			/>
		);
	}, []);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
