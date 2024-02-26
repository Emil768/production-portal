import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { $api } from 'shared/api/axios';
import { uiReducer } from 'features/UI';
import { ReduxStoreProps, StoreSchema } from './storeSchema';
import { createReducerManager } from './reduxManages';

export function createReduxStore({ initialState }: ReduxStoreProps) {
	const rootReducers: ReducersMapObject<StoreSchema> = {
		user: userReducer,
		ui: uiReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<StoreSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: {
						api: $api,
					},
				},
			}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
// export type RootState = ReturnType<typeof createReduxStore>['getState'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StoreSchema> = useSelector;
