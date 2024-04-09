import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotificationList: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
                params: {
                    _expand: 'user',
                },
            }),
        }),
    }),
});

export const { useGetNotificationListQuery } = notificationApi;
