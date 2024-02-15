import { useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { getAuthDataSelector } from 'entities/User/model/selectors/selectors';
import React, { Suspense, useCallback, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AutRouterProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AutRouterProps) => {
		const element = (
			<Suspense fallback={<PageLoader />}>
				<div className="page-wrapper">{route.element}</div>
			</Suspense>
		);

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
