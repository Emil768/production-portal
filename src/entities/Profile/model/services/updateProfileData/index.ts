import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import i18next from 'i18next';
import { Profile } from '../../types/profile';
import { getProfileFormDataSelector } from '../../selectors/selectors';

export const updateProfile = createAsyncThunk<Profile, void, ExtraThunkProps<string>>(
	'profile/updateProfile',
	async (_, { extra, rejectWithValue, getState }) => {
		try {
			// @ts-ignore
			const formData = getProfileFormDataSelector(getState());

			const response = await extra.api.put<Profile>('/profile', formData);

			return response.data;
		} catch (e) {
			return rejectWithValue(i18next.t('Что-то пошло не так...'));
		}
	},
);
