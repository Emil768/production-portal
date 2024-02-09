import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getInitialValuesLoginSelector = (state: StoreSchema) => state.loginForm;
