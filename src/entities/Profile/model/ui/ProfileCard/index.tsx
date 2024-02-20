import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';
import { ProfileHeader } from '../ProfileHeader';
import { ProfileContent } from '../ProfileContent';
import {
	getIsProfileLoadingSelector,
	getProfileErrorSelector,
	getProfileFormDataSelector,
} from '../../selectors/selectors';

interface ProfileCardProps {
	className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
	const { t } = useTranslation('profile');
	const formData = useAppSelector(getProfileFormDataSelector);
	const error = useAppSelector(getProfileErrorSelector);
	const isLoading = useAppSelector(getIsProfileLoadingSelector);

	if (isLoading) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className])}>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className])}>
				<Text title={t('Не удалось загрузить профиль')} theme={TextTheme.ERROR} />
				<Text text={error as string} theme={TextTheme.ERROR} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<ProfileHeader />
			<ProfileContent data={formData} />
		</div>
	);
}
