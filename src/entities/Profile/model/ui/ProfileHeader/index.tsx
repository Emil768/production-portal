import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileHeader.module.scss';
import { profileActions } from '../../slice/profileSlice';
import { getIsReadOnlySelector } from '../../selectors/selectors';
import { updateProfile } from '../../services/updateProfileData';

interface ProfileCardProps {
	className?: string;
}

export function ProfileHeader({ className }: ProfileCardProps) {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const readOnly = useAppSelector(getIsReadOnlySelector);

	const onSetReadOnly = () => {
		dispatch(profileActions.setReadOnly(false));
	};

	const onCancelEdit = () => {
		dispatch(profileActions.cancelEdit(true));
	};

	const onSaveEdit = () => {
		dispatch(updateProfile());
	};

	return (
		<div className={classNames(cls.ProfileHeader, {}, [className])}>
			<Text title={t('Профиль')} />
			{readOnly ? (
				<Button onClick={onSetReadOnly}>{t('Редактировать')}</Button>
			) : (
				<div>
					<Button onClick={onCancelEdit}>{t('Отменить')}</Button>
					<Button onClick={onSaveEdit}>{t('Сохранить')}</Button>
				</div>
			)}
		</div>
	);
}
