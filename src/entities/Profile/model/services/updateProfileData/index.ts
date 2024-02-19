import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import i18next from 'i18next';
import { Profile, ValidationErroProfile } from '../../types/profile';
import { getProfileFormDataSelector } from '../../selectors/selectors';
import { validateFieldsError } from '../validateProfileData';

export const updateProfile = createAsyncThunk<Profile, void, ExtraThunkProps<ValidationErroProfile>>(
	'profile/updateProfile',
	async (_, { extra, rejectWithValue, getState }) => {
		try {
			// @ts-ignore
			const formData = getProfileFormDataSelector(getState());

			const errors = validateFieldsError(formData);

			if (Object.keys(errors).length !== 0) {
				return rejectWithValue(errors);
			}

			const response = await extra.api.put<Profile>('/profile', formData);

			return response.data;
		} catch (e) {
			return rejectWithValue({
				error: i18next.t('Что-то пошло не так...'),
			});
		}
	},
);
