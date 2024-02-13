import React from 'react';
import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import { DynamicReducerWrapper, ReducersList } from 'shared/lib/DynamicReducerWrapper/DynamicReducerWrapper';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';

const reducer: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = () => {
	const { t } = useTranslation();

	return (
		<DynamicReducerWrapper reducers={reducer} removeAfterUnmounting>
			<div className={classNames(cls.LoginForm, {}, [])}>
				<div>{t('Пользователь')}</div>
			</div>
		</DynamicReducerWrapper>
	);
};

export default ProfilePage;
