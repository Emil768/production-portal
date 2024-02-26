import { ArticlesDetail } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { CommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { DynamicReducerWrapper, ReducersList } from 'shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { getIsArticleLoadingSelector } from 'entities/Article/model/selectors';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { useCallback, useEffect } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slice';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import cls from './ArticlesDetailPage.module.scss';
import { fetchCommentFormByArticle } from '../model/services/fetchCommentFormByArticle';

const reducers: ReducersList = {
	article_comments: articleDetailsCommentsReducer,
};

const ArticlesDetailPage = () => {
	const { t } = useTranslation('articles');
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(getIsArticleLoadingSelector);
	const comments = useAppSelector(getArticleComments.selectAll);

	useEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	}, []);

	const onCommentSend = useCallback(
		(value: string) => {
			dispatch(fetchCommentFormByArticle(value));
		},
		[dispatch],
	);

	if (!id) {
		return (
			<div>
				<Text title={t('Статья не найдена')} />
			</div>
		);
	}

	return (
		<Page>
			<div className={classNames(cls.ArticlesDetail, {}, [])}>
				<AppLink to="/articles">{t('Назад')}</AppLink>
				<ArticlesDetail id={id} />
				<Text title={t('Комментарии')} className={cls.title} />
				<CommentForm onCommentSend={onCommentSend} />
				<DynamicReducerWrapper reducers={reducers}>
					<CommentList isLoading={isLoading} comments={comments} />
				</DynamicReducerWrapper>
			</div>
		</Page>
	);
};

export default ArticlesDetailPage;
