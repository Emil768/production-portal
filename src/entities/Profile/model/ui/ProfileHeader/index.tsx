import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { Text } from 'shared/ui/Text/Text';
import { getAuthDataSelector } from 'entities/User/model/selectors/selectors';
import { profileActions } from '../../slice/profileSlice';
import { getIsReadOnlySelector, getProfileDataSelector } from '../../selectors/selectors';
import { updateProfile } from '../../services/updateProfileData';
import cls from './ProfileHeader.module.scss';

interface ProfileCardProps {
	className?: string;
}

export function ProfileHeader({ className }: ProfileCardProps) {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const authData = useAppSelector(getAuthDataSelector);
	const profileData = useAppSelector(getProfileDataSelector);
	const readOnly = useAppSelector(getIsReadOnlySelector);

	const isEdit = profileData?.id === authData?.id;

	const onSetReadOnly = () => {
		dispatch(profileActions.setReadOnly(false));
	};

	const onCancelEdit = () => {
		dispatch(profileActions.cancelEdit(true));
	};

	const onSaveEdit = () => {
		// @ts-ignore
		dispatch(updateProfile());
	};

	return (
		<div className={classNames(cls.ProfileHeader, {}, [className])}>
			<Text title={t('Профиль')} />

			{isEdit &&
				(readOnly ? (
					<Button onClick={onSetReadOnly}>{t('Редактировать')}</Button>
				) : (
					<div>
						<Button onClick={onCancelEdit} className={cls.Button}>
							{t('Отменить')}
						</Button>
						<Button onClick={onSaveEdit} className={cls.Button}>
							{t('Сохранить')}
						</Button>
					</div>
				))}
		</div>
	);
}
