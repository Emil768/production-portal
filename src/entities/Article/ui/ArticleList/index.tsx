import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Article } from '../../model/types/article';
import { ArticleView } from '../../model/consts';
import cls from './ArticleList.module.scss';
import { ArticleListItem } from '../ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    view?: ArticleView;
    isLoading?: boolean;
}

const renderSkeletons = (view: ArticleView) => {
    return Array(view === ArticleView.FULL ? 4 : 6)
        .fill(0)
        .map((item, index) => {
            return (
                <Skeleton
                    width="100%"
                    height="300px"
                    key={index}
                    className={cls.skeleton}
                />
            );
        });
};

export const ArticleList = memo(
    ({
        className,
        articles,
        isLoading,
        view = ArticleView.MULT,
    }: ArticleListProps) => {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                {articles.map((item) => (
                    <ArticleListItem article={item} key={item.id} view={view} />
                ))}
                {isLoading && (
                    <div
                        className={classNames(cls.ArticleList, {}, [
                            className,
                            cls[view],
                        ])}
                    >
                        {renderSkeletons(view)}
                    </div>
                )}
            </div>
        );
    },
);
