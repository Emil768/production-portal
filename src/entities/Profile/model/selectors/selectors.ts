import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getProfileDataSelector = (state: StoreSchema) => state?.profile?.data;

export const getProfileFormDataSelector = (state: StoreSchema) => state?.profile?.formData;

export const getProfileErrorSelector = (state: StoreSchema) => state?.profile?.error;

export const getIsProfileLoadingSelector = (state: StoreSchema) => state?.profile?.isLoading;

export const getIsReadOnlySelector = (state: StoreSchema) => state?.profile?.readonly;
