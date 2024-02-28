import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem';

interface ArticleListProps {
	className?: string;
	articles?: Article[];
	view?: ArticleView;
	isLoading: boolean;
}

const renderSkeletons = (view: ArticleView) => {
	return Array(view === ArticleView.FULL ? 3 : 6)
		.fill(0)
		.map((item, index) => {
			return (
				<div key={index}>
					<Skeleton width="100%" height="200px" />
				</div>
			);
		});
};

export const ArticleList = memo(({ className, articles, isLoading, view }: ArticleListProps) => {
	return (
		<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
			{articles.map((item) => (
				<ArticleListItem article={item} key={item.id} view={view} />
			))}
			{isLoading && (
				<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{renderSkeletons(view)}</div>
			)}
		</div>
	);
});
