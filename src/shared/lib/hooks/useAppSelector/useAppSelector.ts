import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';

export const useAppSelector: TypedUseSelectorHook<StoreSchema> = useSelector;
