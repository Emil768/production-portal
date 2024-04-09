import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types';
import { loginByUserName } from '../services/LoginByUsername';

export const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(loginByUserName.pending, (state, action) => {
                // Add user to the state array
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUserName.fulfilled, (state, action) => {
                // Add user to the state array
                state.isLoading = false;
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = true;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;

export const { reducer: loginReducer } = loginSlice;
