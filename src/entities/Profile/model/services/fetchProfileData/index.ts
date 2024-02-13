import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import i18next from 'i18next';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ExtraThunkProps<string>>(
	'profile/fetchProfileData',
	async (_, { extra, dispatch, rejectWithValue }) => {
		try {
			// @ts-ignore
			const response = await extra.api.get<Profile>('/profile');

			return response.data;
		} catch (e) {
			return rejectWithValue(i18next.t('Что-то пошло не так...'));
		}
	},
);
