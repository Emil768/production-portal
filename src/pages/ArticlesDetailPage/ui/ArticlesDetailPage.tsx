import { ArticlesDetail } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicReducerWrapper, ReducersList } from 'shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { getIsArticleLoadingSelector } from 'entities/Article/model/selectors';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { useEffect } from 'react';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice';

import cls from './ArticlesDetailPage.module.scss';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';

const reducers: ReducersList = {
	article_comments: articleDetailsCommentsReducer,
};

const ArticlesDetailPage = () => {
	const { t } = useTranslation();
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(getIsArticleLoadingSelector);
	const comments = useAppSelector(getArticleComments.selectAll);

	useEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	}, []);

	if (!id) {
		return (
			<div>
				<Text title={t('Статья не найдена')} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticlesDetail, {}, [])}>
			<ArticlesDetail id={id} />

			<DynamicReducerWrapper reducers={reducers} removeAfterUnmounting>
				<CommentList isLoading={isLoading} comments={comments} />
			</DynamicReducerWrapper>
		</div>
	);
};

export default ArticlesDetailPage;
