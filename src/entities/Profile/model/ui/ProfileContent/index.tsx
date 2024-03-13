import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from '@/app/providers/ReduxProvider/config/store';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { getIsReadOnlySelector, getValidationErrorsSelector } from '../../selectors/selectors';
import { Profile } from '../../types/profile';
import { profileActions } from '../../slice/profileSlice';
import cls from './ProfileContent.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
}

export function ProfileContent({ className, data }: ProfileCardProps) {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const readOnly = useAppSelector(getIsReadOnlySelector);
	const error = useAppSelector(getValidationErrorsSelector);

	const onChangeSurname = useCallback(
		(value: string) => {
			dispatch(profileActions.setUpdateData({ lastname: value || '' }));
		},
		[dispatch],
	);

	const onChangeAge = useCallback(
		(value: string) => {
			dispatch(profileActions.setUpdateData({ age: Number(value) || 0 }));
		},
		[dispatch],
	);

	const onChangeCity = useCallback(
		(value: string) => {
			dispatch(profileActions.setUpdateData({ city: value || '' }));
		},
		[dispatch],
	);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(profileActions.setUpdateData({ username: value || '' }));
		},
		[dispatch],
	);

	const onChangeAvatar = useCallback(
		(value: string) => {
			dispatch(profileActions.setUpdateData({ avatar: value || '' }));
		},
		[dispatch],
	);

	const onChangeCurrency = useCallback(
		(currency: Currency) => {
			dispatch(profileActions.setUpdateData({ currency }));
		},
		[dispatch],
	);

	const onChangeCountry = useCallback(
		(country: Country) => {
			dispatch(profileActions.setUpdateData({ country }));
		},
		[dispatch],
	);

	return (
		<div className={classNames(cls.ProfileContent, {}, [className])}>
			{data?.avatar && (
				<Avatar src={data.avatar} alt={t('Аватар на странице профиля')} size={200} className={cls.Avatar} />
			)}
			<div className={cls.form}>
				<Input
					value={data?.username || ''}
					theme={InputTheme.CIRCLE}
					onChange={onChangeUsername}
					readOnly={readOnly}
					validate={error?.username || ''}
					label={t('Имя')}
				/>
				<Input
					value={data?.lastname || ''}
					theme={InputTheme.CIRCLE}
					onChange={onChangeSurname}
					readOnly={readOnly}
					validate={error?.lastname || ''}
					label={t('Фамилия')}
				/>
				<Input
					value={data?.age || 0}
					theme={InputTheme.CIRCLE}
					onChange={onChangeAge}
					readOnly={readOnly}
					validate={error?.age || ''}
					label={t('Возраст')}
				/>
				<Input
					value={data?.city || ''}
					theme={InputTheme.CIRCLE}
					onChange={onChangeCity}
					readOnly={readOnly}
					label={t('Город')}
				/>
				<Input
					value={data?.avatar || ''}
					theme={InputTheme.CIRCLE}
					onChange={onChangeAvatar}
					readOnly={readOnly}
					label={t('Аватарка')}
				/>
				<div className={cls.Select_wrapper}>
					<CurrencySelect
						value={data?.currency}
						onChange={onChangeCurrency}
						readOnly={readOnly}
						className={cls.Select}
					/>
					<CountrySelect
						value={data?.country}
						readOnly={readOnly}
						onChange={onChangeCountry}
						className={cls.Select}
					/>
				</div>
			</div>
		</div>
	);
}
