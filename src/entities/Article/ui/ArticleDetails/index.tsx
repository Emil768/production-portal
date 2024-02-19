import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import {
	getArticleDataSelector,
	getArticleErrorSelector,
	getIsArticleLoadingSelector,
} from 'entities/Article/model/selectors';
import { fetchArticleData } from 'entities/Article/model/services/fetchArticleData';
import React, { useCallback, useEffect } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { useTranslation } from 'react-i18next';
import { DynamicReducerWrapper, ReducersList } from 'shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { ArticleBlock, ArticleBlockType } from 'entities/Article/model/types/article';
import { articleReducer } from '../../model/slice';
import cls from './ArticleDetails.module.scss';
import { ArticleDetailText } from '../ArticleDetailtsText';
import { ArticleDetailCode } from '../ArticleDetailtsCode';
import { ArticleDetailImage } from '../ArticleDetailtsImage';

interface ArticleDetailtProps {
	id?: string;
}

const reducer: ReducersList = {
	article: articleReducer,
};

export const ArticlesDetail = ({ id }: ArticleDetailtProps) => {
	const { t } = useTranslation('articles');
	const dispatch = useAppDispatch();
	const error = useAppSelector(getArticleErrorSelector);
	const isLoading = useAppSelector(getIsArticleLoadingSelector);
	const articles = useAppSelector(getArticleDataSelector);

	useEffect(() => {
		dispatch(fetchArticleData(id));
	}, []);

	let content;

	const renderBlocks = useCallback((block: ArticleBlock) => {
		switch (block.type) {
			case ArticleBlockType.TEXT:
				return <ArticleDetailText block={block} key={block.id} />;
			case ArticleBlockType.CODE:
				return <ArticleDetailCode block={block} key={block.id} />;
			case ArticleBlockType.IMAGE:
				return <ArticleDetailImage block={block} key={block.id} />;
			default:
				return null;
		}
	}, []);

	if (isLoading) {
		content = (
			<div className={cls.Skeletons}>
				<Skeleton width={150} height={150} circle className={cls.avatar} />
				<Skeleton width="50%" height={50} className={cls.title} />
				<Skeleton width="50%" height={50} className={cls.subtitle} />
				<Skeleton width="100%" height={150} className={cls.skeleton} />
				<Skeleton width="100%" height={150} className={cls.skeleton} />
			</div>
		);
	} else if (error) {
		content = <div>{t('Ошибка')}</div>;
	} else {
		content = (
			<div className={cls.Article}>
				<Avatar src={articles?.img} alt={t('Аватар статьи')} size={100} />
				<Text title={articles?.title} text={articles?.subtitle} />
				<Text text={String(articles?.views)} />
				<Text text={articles?.createdAt} />

				{articles?.type.map((item) => {
					return <Text text={item} key={item} />;
				})}

				{articles?.blocks.map(renderBlocks)}
			</div>
		);
	}
	return (
		<DynamicReducerWrapper reducers={reducer} removeAfterUnmounting>
			<div>{content}</div>
		</DynamicReducerWrapper>
	);
};
