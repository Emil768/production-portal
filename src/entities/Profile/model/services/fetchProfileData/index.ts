import i18next from 'i18next';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExtraThunkProps } from '@/app/providers/ReduxProvider/config/storeSchema';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ExtraThunkProps<string>
>('profile/fetchProfileData', async (profileId, { extra, rejectWithValue }) => {
    try {
        const response = await extra.api.get<Profile>(`/profile/${profileId}`);

        return response.data;
    } catch (e) {
        return rejectWithValue(i18next.t('Что-то пошло не так...'));
    }
});
