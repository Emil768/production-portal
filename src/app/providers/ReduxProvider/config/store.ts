import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { counterReducer } from 'entities/Counter';
import { StoreSchema } from './storeSchema';

export const createReduxStore = (initialState?: StoreSchema) => {
	const rootStore: ReducersMapObject<StoreSchema> = {
		counter: counterReducer,
		user: userReducer,
	};
	return configureStore<StoreSchema>({
		reducer: rootStore,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
};

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
