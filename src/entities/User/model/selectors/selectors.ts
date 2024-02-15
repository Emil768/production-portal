import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getAuthDataSelector = (state: StoreSchema) => state.user.authData;
