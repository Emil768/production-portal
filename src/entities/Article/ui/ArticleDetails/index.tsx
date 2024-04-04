import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/store';
import { getArticleDataSelector, getArticleErrorSelector, getIsArticleLoadingSelector } from '../../model/selectors';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { DynamicReducerWrapper, ReducersList } from '@/shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { Image } from '@/shared/ui/Image/Image';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleBlockType } from '../../model/consts';
import { ArticleBlock } from '../../model/types/article';
import { fetchArticleData } from '../../model/services/fetchArticleData';
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

export const ArticlesDetail = memo(({ id }: ArticleDetailtProps) => {
	const { t } = useTranslation('articles');
	const dispatch = useAppDispatch();
	const error = useAppSelector(getArticleErrorSelector);
	const isLoading = useAppSelector(getIsArticleLoadingSelector);
	const articles = useAppSelector(getArticleDataSelector);

	useEffect(() => {
		// @ts-ignore
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
				<div className={cls.header}>
					<Image sourse={articles?.img} alt={t('Аватар статьи')} />
					<Text title={articles?.title} text={articles?.subtitle} />
					<div className={cls.views}>
						<Image sourse={<EyeIcon />} />
						<Text text={String(articles?.views)} />
					</div>
					<Text text={articles?.createdAt} />

					{articles?.type.map((item) => {
						return <Text text={item} key={item} />;
					})}
				</div>

				{articles?.blocks.map(renderBlocks)}
			</div>
		);
	}
	return (
		<DynamicReducerWrapper reducers={reducer} removeAfterUnmounting>
			<div>{content}</div>
		</DynamicReducerWrapper>
	);
});
