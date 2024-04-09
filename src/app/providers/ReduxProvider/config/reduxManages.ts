import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ReducerManager, StoreKeysProps, StoreSchema } from './storeSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StoreSchema>,
): ReducerManager {
    const reducers = { ...initialReducers };

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StoreKeysProps> = [];

    return {
        getReducerMap: () => reducers,

        reduce: (state: StoreSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StoreKeysProps, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;

            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StoreKeysProps) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);

            combinedReducer = combineReducers(reducers);
        },
    };
}
