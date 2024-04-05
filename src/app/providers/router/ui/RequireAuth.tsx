import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRoles, getAuthDataSelector, getUserRolesSelector } from '@/entities/User';

import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

interface RequireAuthProps {
	children: JSX.Element;
	roles?: UserRoles[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
	const location = useLocation();
	const isAuth = useAppSelector(getAuthDataSelector);
	const userRoles = useAppSelector(getUserRolesSelector);

	const isHasRole = useMemo(() => {
		if (!roles) {
			return true;
		}
		return roles.some((role) => {
			return userRoles.includes(role);
		});
	}, [roles, userRoles]);

	if (!isAuth || !isHasRole) {
		return <Navigate to="/" replace state={{ path: location.pathname }} />;
	}

	return children;
};
