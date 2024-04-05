import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleDetailText.module.scss';

interface ArticleDetailTextProps {
	className?: string;
	block: ArticleTextBlock;
}

export const ArticleDetailText = memo(({ className, block }: ArticleDetailTextProps) => {
	return (
		<div className={classNames(cls.ArticlesDetailText, {}, [className])}>
			{block.paragraphs.map((item, index) => {
				return <Text key={item} text={item} className={cls.text} />;
			})}
		</div>
	);
});
