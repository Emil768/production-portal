import User from './model/ui/User';
import { userReducer, userActions } from './model/slice';
import {
	getAuthDataSelector,
	getUserRolesSelector,
	getIsUserRoleSelector,
	getIsUserAdminRoleSelector,
	getIsUserManagerRoleSelector,
	getAuthInitSelector,
} from './model/selectors/selectors';

import type { User as UserType } from './model/types';

export {
	User,
	UserType,
	userReducer,
	getAuthDataSelector,
	getUserRolesSelector,
	getIsUserRoleSelector,
	getIsUserAdminRoleSelector,
	getIsUserManagerRoleSelector,
	userActions,
	getAuthInitSelector,
};

export type { UserSchema } from './model/types';

export { UserRoles } from './model/consts';
