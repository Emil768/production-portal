import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getIsArticleEditSelector } from '../../model/selectors/articles';
import { AppLink } from '@/shared/ui/AppLink';
import { getArticleDataSelector } from '@/entities/Article';
import cls from './ArticleDetailPageHeader.module.scss';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector';

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
			{isEdit && <AppLink to={`/article/${article?.id}/edit`}>{t('Редактировать')}</AppLink>}
		</div>
	);
};
