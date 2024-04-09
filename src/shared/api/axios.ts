import axios from 'axios';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        Authorization: localStorage.getItem('user'),
    },
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem('user') || '';
    }
    return config;
});
