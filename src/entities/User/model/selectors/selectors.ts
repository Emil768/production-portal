import { createSelector } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';
import { initialState } from '../slice';

const selectcUserStoreDomain = (state: StoreSchema) => state.user || initialState;

export const getInitialValuesUserSelector = createSelector(selectcUserStoreDomain, ({ authData }) => authData);
