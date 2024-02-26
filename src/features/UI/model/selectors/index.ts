import { createSelector } from '@reduxjs/toolkit';
import { StoreSchema } from 'app/providers/ReduxProvider/config/storeSchema';

export const getUIScrollSelector = (state: StoreSchema) => {
	return state?.ui.scroll;
};

export const getUiScrollByPath = createSelector(
	getUIScrollSelector,
	(state: StoreSchema, path: string) => path,
	(scroll, path) => scroll[path] || 0,
);
