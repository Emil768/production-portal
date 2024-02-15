import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch, useAppSelector } from 'app/providers/ReduxProvider/config/store';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Input, InputTheme } from 'shared/ui/Input/Input';
import { getIsReadOnlySelector } from '../../selectors/selectors';
import { Profile } from '../../types/profile';
import { profileActions } from '../../slice/profileSlice';
import cls from './ProfileContent.module.scss';

interface ProfileCardProps {
	className?: string;
	data: Profile;
}

export function ProfileContent({ className, data }: ProfileCardProps) {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const readOnly = useAppSelector(getIsReadOnlySelector);

	const onChangeFirstname = useCallback(
		(value: string) => {
			dispatch(profileActions.setUpdateData({ first: value || '' }));
		},
		[dispatch],
	);

	const onChangeSurname = useCallback(
		(value: string) => {
			dispatch(profileActions.setUpdateData({ lastname: value || '' }));
		},
		[dispatch],
	);

	const onChangeAge = useCallback(
		(value: number) => {
			dispatch(profileActions.setUpdateData({ age: value || 0 }));
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
		<div className={classNames(cls.ProfileHeader, {}, [className])}>
			{data?.avatar && <Avatar src={data.avatar} alt={t('Аватар на странице профиля')} size={200} />}
			<div>
				<Input
					value={data?.first || ''}
					theme={InputTheme.CIRCLE}
					onChange={onChangeFirstname}
					readOnly={readOnly}
				/>
				<Input
					value={data?.lastname || ''}
					theme={InputTheme.CIRCLE}
					onChange={onChangeSurname}
					readOnly={readOnly}
				/>
				<Input value={data?.age || 0} theme={InputTheme.CIRCLE} onChange={onChangeAge} readOnly={readOnly} />
				<Input value={data?.city || ''} theme={InputTheme.CIRCLE} onChange={onChangeCity} readOnly={readOnly} />
				<Input
					value={data?.username || ''}
					theme={InputTheme.CIRCLE}
					onChange={onChangeUsername}
					readOnly={readOnly}
				/>
				<Input
					value={data?.avatar || ''}
					theme={InputTheme.CIRCLE}
					onChange={onChangeAvatar}
					readOnly={readOnly}
				/>
				<CurrencySelect value={data?.currency} onChange={onChangeCurrency} readOnly={readOnly} />
				<CountrySelect value={data?.country} readOnly={readOnly} onChange={onChangeCountry} />
			</div>
		</div>
	);
}
