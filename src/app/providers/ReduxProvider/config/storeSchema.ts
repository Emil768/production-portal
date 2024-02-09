import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User/model/types';
import { LoginSchema } from 'features/AuthByUsername/ui';

export interface StoreSchema {
	user: UserSchema;

	// async
	loginForm?: LoginSchema;
}

export type StoreKeysProps = keyof StoreSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StoreSchema>;
	reduce: (state: StoreSchema, action: AnyAction) => StoreSchema;
	add: (key: StoreKeysProps, reducer: Reducer) => void;
	remove: (key: StoreKeysProps) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema> {
	reducerManager: ReducerManager;
}
