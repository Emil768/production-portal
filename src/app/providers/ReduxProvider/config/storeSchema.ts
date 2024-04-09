import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ProfileSchema } from '@/entities/Profile';
import { UserSchema } from '@/entities/User';
import { CommentFormSchema } from '@/features/AddCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { UISchema } from '@/features/UI';
import { ArticleDetailsPageSchema } from '@/pages/ArticlesDetailPage';
import { ArticlePageSchema } from '@/pages/ArticlesPage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StoreSchema {
    user: UserSchema;

    // async
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    article?: ArticleDetailsSchema;
    articlesPage?: ArticlePageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
    commentForm?: CommentFormSchema;
    ui: UISchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ReduxStoreProps {
    initialState?: StoreSchema;
}

export type StoreKeysProps = keyof StoreSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StoreSchema>;
    reduce: (
        state: StoreSchema,
        action: AnyAction,
    ) => CombinedState<StoreSchema>;
    add: (key: StoreKeysProps, reducer: Reducer) => void;
    remove: (key: StoreKeysProps) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StoreSchema> {
    reducerManager: ReducerManager;
}

export interface ExtraThunkProps<T> {
    extra: {
        api: AxiosInstance;
    };
    rejectValue: T;
    state: StoreSchema;
}
