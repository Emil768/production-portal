import { memo } from 'react';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Image } from 'shared/ui/Image/Image';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Article, ArticleBlockType, ArticleTextBlock, ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view }: ArticleListItemProps) => {
	const { t } = useTranslation('articles');
	if (view === ArticleView.FULL) {
		const block = article.blocks.find((item) => {
			return item.type === ArticleBlockType.TEXT;
		}) as ArticleTextBlock;

		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<div className={cls.wrapper}>
					<Avatar size={60} src={article.userId.avatar} alt={t('Аватар пользователя')} />
					<Text text={article.createdAt} />
				</div>
				<Text title={article.title} />
				{article.type.map((item) => (
					<Text text={item} key={item} />
				))}

				<Image sourse={article.img} className={cls.image} />
				{block.paragraphs.map((item, index) => (
					<Text text={item} key={index} className={cls.text} />
				))}

				<div className={cls.wrapper}>
					{/* eslint-disable-next-line i18next/no-literal-string */}
					<AppLink target="_blank" to={`/articles/${article.id}`}>
						{t('Читать далее...')}
					</AppLink>
					<div className={cls.views}>
						<Text text={String(article.views)} />
						<Image sourse={<EyeIcon />} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleListItem, {}, [className])}>
			<div className={cls.image_wrapper}>
				<Image sourse={article.img} alt={article.title} className={cls.image} />
				<Text text={article.createdAt} className={cls.date} />
			</div>
			<div className={cls.wrapper}>
				{article.type.map((item) => (
					<Text text={item} key={item} />
				))}
				<div className={cls.views}>
					<Text text={String(article.views)} />
					<Image sourse={<EyeIcon />} />
				</div>
			</div>
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<AppLink target="_blank" to={`/articles/${article.id}`}>
				<Text text={article.title} />
			</AppLink>
		</div>
	);
});
