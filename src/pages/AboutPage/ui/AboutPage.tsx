import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            <div>{t('О сайте')}</div>
        </Page>
    );
};

export default AboutPage;
