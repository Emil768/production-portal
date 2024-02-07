import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types';

export const initialState: UserSchema = {
	authData: null,
};

export const userrSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {},
});

export const { actions: userActions } = userrSlice;

export const { reducer: userReducer } = userrSlice;
