import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { loginReducer } from 'features/AuthByUsername/ui';
import { StoreSchema } from './storeSchema';

export const createReduxStore = (initialState?: StoreSchema) => {
	const rootStore: ReducersMapObject<StoreSchema> = {
		user: userReducer,
		loginForm: loginReducer,
	};
	return configureStore<StoreSchema>({
		reducer: rootStore,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
// export type RootState = ReturnType<typeof createReduxStore>['getState'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreSchema> = useSelector;
