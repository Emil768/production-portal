import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { getIsArticleEditSelector } from 'pages/ArticlesDetailPage/model/selectors/articles';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { getArticleDataSelector } from 'entities/Article';
import { useAppSelector } from 'app/providers/ReduxProvider/config/store';
import cls from './ArticleDetailPageHeader.module.scss';

interface ArticleDetailPageHeaderProps {
	className?: string;
}

export const ArticleDetailPageHeader = ({ className }: ArticleDetailPageHeaderProps) => {
	const { t } = useTranslation('articles');
	const isEdit = useAppSelector(getIsArticleEditSelector);
	const article = useAppSelector(getArticleDataSelector);

	return (
		<div className={classNames(cls.ArticlePageFilters, {}, [className])}>
			<AppLink to="/articles">{t('Назад')}</AppLink>
			{isEdit && <AppLink to={`/article/${article.id}/edit`}>{t('Редактировать')}</AppLink>}
		</div>
	);
};
