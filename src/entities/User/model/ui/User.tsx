import React from 'react';
import { useTranslation } from 'react-i18next';

function User() {
	const { t } = useTranslation();

	return <div>{t('Пользователь')}</div>;
}

export default User;
