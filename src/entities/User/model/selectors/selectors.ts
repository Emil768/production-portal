import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getAuthDataSelector = (state: StoreSchema) => state.user.authData;

export const getAuthInitSelector = (state: StoreSchema) => state.user._init;
