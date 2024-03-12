import User from './model/ui/User';
import { userReducer } from './model/slice';
import {
	getAuthDataSelector,
	getUserRolesSelector,
	getIsUserRoleSelector,
	getIsUserAdminRoleSelector,
	getIsUserManagerRoleSelector,
} from './model/selectors/selectors';

export {
	User,
	userReducer,
	getAuthDataSelector,
	getUserRolesSelector,
	getIsUserRoleSelector,
	getIsUserAdminRoleSelector,
	getIsUserManagerRoleSelector,
};

export type { UserSchema } from './model/types';

export { UserRoles } from './model/consts';
