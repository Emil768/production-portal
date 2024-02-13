import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from 'app/providers/ReduxProvider/config/storeSchema';
import { userActions } from 'entities/User/model/slice';
import { User } from 'entities/User/model/types';
import i18next from 'i18next';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUsernameProps, ExtraThunkProps<string>>(
	'login/loginByUsername',
	async (authData, { extra, dispatch, rejectWithValue }) => {
		try {
			// @ts-ignore
			const response = await extra.api.post<User>('/login', authData);

			dispatch(userActions.setUser(response.data));
			localStorage.setItem('user', JSON.stringify(response.data));
			extra.navigate('./profile');
			return response.data;
		} catch (e) {
			return rejectWithValue(i18next.t('Неверный логин или пароль'));
		}
	},
);
