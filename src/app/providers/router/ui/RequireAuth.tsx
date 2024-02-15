import { useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { getAuthDataSelector } from 'entities/User/model/selectors/selectors';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
	const location = useLocation();
	const isAuth = useAppSelector(getAuthDataSelector);

	if (!isAuth) {
		return <Navigate to="/" replace state={{ path: location.pathname }} />;
	}

	return children;
};
