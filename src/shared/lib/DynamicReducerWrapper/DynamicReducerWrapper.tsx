import { FC, ReactNode, useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StoreKeysProps,
    StoreSchema,
} from '@/app/providers/ReduxProvider/config/storeSchema';
import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch';

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
        Object.entries(reducers).forEach(([key, value]) => {
            const reducer = store.reducerManager.getReducerMap();

            if (!reducer[key as StoreKeysProps]) {
                store.reducerManager?.add(key as StoreKeysProps, value);
                dispatch({ type: `@INIT ${key} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmounting) {
                Object.entries(reducers).forEach(([key, value]) => {
                    store.reducerManager.remove(key as StoreKeysProps);
                    dispatch({ type: `@DESTROY ${key}  reducer` });
                });
            }
        };
    }, []);

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};
