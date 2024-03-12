import { ArticleList, ArticlesDetail } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
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
import { ArticleDetailPageReducer } from '../../model/slice';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import cls from './ArticlesDetailPage.module.scss';
import { fetchCommentFormByArticle } from '../../model/services/fetchCommentFormByArticle';
import { fetchRecommendationArticles } from '../../model/services/fetchRecommendationArticles';
import { getIsArticleRecommendationsLoadingSelector } from '../../model/selectors/recommendations';
import { getArticleRecommendations } from '../../model/slice/ArticleDetailRecommendationSlice';
import { getArticleComments } from '../../model/slice/ArticleDetailCommentsSlice';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';

const reducers: ReducersList = {
	articleDetailsPage: ArticleDetailPageReducer,
};

const ArticlesDetailPage = () => {
	const { t } = useTranslation('articles');
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const isLoading = useAppSelector(getIsArticleLoadingSelector);
	const comments = useAppSelector(getArticleComments.selectAll);
	const isLoadingRecommendations = useAppSelector(getIsArticleRecommendationsLoadingSelector);
	const articles = useAppSelector(getArticleRecommendations.selectAll);

	useEffect(() => {
		// @ts-ignore
		dispatch(fetchCommentsByArticleId(id));
		// @ts-ignore
		dispatch(fetchRecommendationArticles());
	}, []);

	const onCommentSend = useCallback(
		(value: string) => {
			// @ts-ignore
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
				<ArticleDetailPageHeader />
				<ArticlesDetail id={id} />
				<div className={cls.recommendations}>
					<Text className={cls.title} title={t('Рекомендации')} />
					<ArticleList articles={articles} isLoading={isLoadingRecommendations} />
				</div>
				<Text title={t('Комментарии')} className={cls.title} />
				<CommentForm onCommentSend={onCommentSend} />
				<DynamicReducerWrapper reducers={reducers}>
					<CommentList comments={comments} isLoading={isLoading} />
				</DynamicReducerWrapper>
			</div>
		</Page>
	);
};

export default ArticlesDetailPage;
