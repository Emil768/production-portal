import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types';

export const initialState: UserSchema = {
    authData: null,
    _init: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initUser: (state) => {
            const user = localStorage.getItem('user');

            if (user) {
                state.authData = JSON.parse(user);
            }

            state._init = true;
        },
        logout: (state) => {
            localStorage.removeItem('user');
            state.authData = null;
        },
    },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
