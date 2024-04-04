import { RouteProps } from 'react-router-dom';
import { UserRoles } from '@/entities/User';

export type AutRouterProps = RouteProps & {
	isAuth?: boolean;
	roles?: UserRoles[];
};
