import { createSelector } from '@reduxjs/toolkit';
import { getArticleDataSelector } from '@/entities/Article';
import { getAuthDataSelector } from '@/entities/User';

export const getIsArticleEditSelector = createSelector(
    getAuthDataSelector,
    getArticleDataSelector,
    (user, article) => {
        if (!article || !user) {
            return false;
        }

        return article.id === user.id;
    },
);
