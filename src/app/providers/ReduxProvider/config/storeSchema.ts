import { AnyAction, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User/model/types';
import { LoginSchema } from 'features/AuthByUsername/ui';
import { NavigateOptions, To } from 'react-router-dom';

export interface StoreSchema {
	user: UserSchema;

	// async
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
}

export interface ReduxStoreProps {
	initialState?: StoreSchema;
	navigate?: (to: To, options?: NavigateOptions) => void;
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

export interface ExtraThunkProps<T> {
	extra: {
		api: AxiosInstance;
		navigate: (to: To, options?: NavigateOptions) => void;
	};
	rejectValue: T;
	getState: () => StoreSchema;
}
