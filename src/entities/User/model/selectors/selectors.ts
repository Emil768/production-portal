import { createSelector } from '@reduxjs/toolkit';
import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';
import { UserRoles } from '../consts';

export const getAuthDataSelector = (state: StoreSchema) => state.user.authData;

export const getAuthInitSelector = (state: StoreSchema) => state.user._init;

export const getUserRolesSelector = (state: StoreSchema) =>
    state.user.authData?.roles || [];

export const getIsUserAdminRoleSelector = createSelector(
    getUserRolesSelector,
    (roles) => roles.includes(UserRoles.ADMIN),
);

export const getIsUserRoleSelector = createSelector(
    getUserRolesSelector,
    (roles) => roles.includes(UserRoles.USER),
);

export const getIsUserManagerRoleSelector = createSelector(
    getUserRolesSelector,
    (roles) => roles.includes(UserRoles.MAGAGER),
);
