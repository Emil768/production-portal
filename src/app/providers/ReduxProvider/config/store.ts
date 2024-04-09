import {
    CombinedState,
    Reducer,
    ReducersMapObject,
    configureStore,
} from '@reduxjs/toolkit';
import { userReducer } from '@/entities/User';
import { $api } from '@/shared/api/axios';
import { rtkApi } from '@/shared/api/rtkApi';
import { uiReducer } from '@/features/UI';
import { ReduxStoreProps, StoreSchema } from './storeSchema';
import { createReducerManager } from './reduxManages';

export function createReduxStore({ initialState }: ReduxStoreProps) {
    const rootReducers: ReducersMapObject<StoreSchema> = {
        [rtkApi.reducerPath]: rtkApi.reducer,
        user: userReducer,
        ui: uiReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StoreSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }).concat(rtkApi.middleware),
    });
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
