import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User/model/types';
import { CommentFormSchema } from 'features/AddCommentForm/model/types';
import { LoginSchema } from 'features/AuthByUsername/ui';
import { UISchema } from 'features/UI';
import { ArticleDetailsCommentsSchema } from 'pages/ArticlesDetailPage';
import { ArticlePageSchema } from 'pages/ArticlesPage/model/types/articlePage.schema';

export interface StoreSchema {
	user: UserSchema;

	// async
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	article?: ArticleDetailsSchema;
	article_comments?: ArticleDetailsCommentsSchema;
	articleDetailsPage: ArticleDetailsSchema;
	commentForm?: CommentFormSchema;
	articlesPage?: ArticlePageSchema;
	ui: UISchema;
}

export interface ReduxStoreProps {
	initialState?: StoreSchema;
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
	};
	rejectValue: T;
	state: StoreSchema;
}
