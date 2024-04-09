import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';

export const getCommentFormTextSelector = (state: StoreSchema) =>
    state?.commentForm?.text || '';

export const getCommentFormErrorSelector = (state: StoreSchema) =>
    state?.commentForm?.error;
