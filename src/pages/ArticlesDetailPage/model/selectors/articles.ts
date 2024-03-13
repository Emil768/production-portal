import { createSelector } from '@reduxjs/toolkit';
import { StoreSchema } from '@/app/providers/ReduxProvider/config/storeSchema';
import { getArticleDataSelector } from '@/entities/Article';
import { getAuthDataSelector } from '@/entities/User';

export const getIsArticleEditSelector = createSelector(getAuthDataSelector, getArticleDataSelector, (user, article) => {
	if (!article || !user) {
		return false;
	}

	return article.id === user.id;
});
