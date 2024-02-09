import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'entities/User/model/slice';
import { User } from 'entities/User/model/types';
import i18next from 'i18next';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
	'login/loginByUsername',
	async (authData, thunkAPI) => {
		try {
			const response = await axios.post('http://localhost:8000/login', authData);

			thunkAPI.dispatch(userActions.setUser(response.data));
			localStorage.setItem('user', JSON.stringify(response.data));

			return response.data;
		} catch (e) {
			console.log('e', e);
			return thunkAPI.rejectWithValue(i18next.t('Неверный логин или пароль'));
		}
	},
);
