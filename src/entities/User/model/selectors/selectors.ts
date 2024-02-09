import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getInitialValuesUserSelector = (state: StoreSchema) => state.user;
