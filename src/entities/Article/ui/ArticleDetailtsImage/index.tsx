import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleDetailImage.module.scss';

interface ArticleDetailImageProps {
	className?: string;
	block?: ArticleImageBlock;
}

export const ArticleDetailImage = memo(({ className, block }: ArticleDetailImageProps) => {
	const { t } = useTranslation();
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return (
			<div>
				<Text title={t('Статья не найдена')} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.ArticleDetailImage, {}, [className])}>
			<img src={block.src} alt={block.title} className={cls.image} />
			<Text text={block.title} align={TextAlign.CENTER} />
		</div>
	);
});
