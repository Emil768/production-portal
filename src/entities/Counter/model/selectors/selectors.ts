import { createSelector } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';
import { initialState } from '../slice';

const selectcCounterStoreDomain = (state: StoreSchema) => state.counter || initialState;

export const getInitialValuesCounterSelector = createSelector(selectcCounterStoreDomain, ({ value }) => value);
