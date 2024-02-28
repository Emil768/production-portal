import { FC, ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager, StoreKeysProps, StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';
import { useAppDispatch } from 'app/providers/ReduxProvider/config/store';

export type ReducersList = {
	[name in StoreKeysProps]?: Reducer<NonNullable<StoreSchema[name]>>;
};

export type ReducersListEntry = [StoreKeysProps, Reducer];

interface DynamicReducerWrapperProps {
	children: ReactNode;
	reducers: ReducersList;
	removeAfterUnmounting?: boolean;
}

export const DynamicReducerWrapper: FC<DynamicReducerWrapperProps> = ({
	children,
	reducers,
	removeAfterUnmounting = true,
}) => {
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useAppDispatch();

	useEffect(() => {
		Object.entries(reducers).forEach(([key, value]: ReducersListEntry) => {
			const reducer = store.reducerManager.getReducerMap();

			if (!reducer[key]) {
				store.reducerManager?.add(key, value);
				dispatch({ type: `@INIT ${key} reducer` });
			}
		});

		return () => {
			if (removeAfterUnmounting) {
				Object.entries(reducers).forEach(([key, value]: ReducersListEntry) => {
					store.reducerManager.remove(key);
					dispatch({ type: `@DESTROY ${key}  reducer` });
				});
			}
		};
	}, []);

	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>;
};
