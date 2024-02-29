import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';

const ArticleEditPage = () => {
	const { t } = useTranslation('articles');
	const { id } = useParams<{ id: string }>();

	return (
		<Page>
			<div className={classNames(cls.ArticleEditPage, {}, [])}>
				{id ? t('Редактирование статьи') : t('Создать статью')}
			</div>
		</Page>
	);
};

export default ArticleEditPage;
