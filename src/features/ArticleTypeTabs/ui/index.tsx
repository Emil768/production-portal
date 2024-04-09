import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from '@/shared/ui/Tabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTypeTabs.module.scss';
import { ArticleType } from '@/entities/Article';

interface ArticleSortSelectorProps {
    className?: string;
    type: ArticleType;
    onTabClick: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
    ({ className, type, onTabClick }: ArticleSortSelectorProps) => {
        const { t } = useTranslation();

        const tabsOptions = useMemo<TabItem<ArticleType>[]>(() => {
            return [
                {
                    content: `${t('Все')}`,
                    value: ArticleType.ALL,
                },
                {
                    content: ArticleType.IT,
                    value: ArticleType.IT,
                },
                {
                    content: `${t('Экономика')}`,
                    value: ArticleType.ECONOMICS,
                },
                {
                    content: `${t('Наука')}`,
                    value: ArticleType.SCIENCE,
                },
            ];
        }, []);

        const onTabChange = useCallback((value: ArticleType) => {
            onTabClick(value);
        }, []);

        return (
            <div className={classNames(cls.ArticleTypeTabs, {}, [className])}>
                <Tabs tabs={tabsOptions} type={type} onTabClick={onTabChange} />
            </div>
        );
    },
);
