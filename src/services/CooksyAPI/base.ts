import axios from 'axios';
import i18n from 'i18next';
import { APIResult } from '../../models/common/APIResult';

const http = axios.create({
    baseURL: import.meta.env.VITE_COOKSY_API_BASE_URL,
    withCredentials: true,
});

http.interceptors.request.use((config) => {
    const lang = i18n.language;
    config.params = { ...(config.params || {}), lang };
    return config;
});

http.interceptors.response.use(
    res => res.data,
    err => {
        const apiRes = err.response?.data;
        return Promise.reject(apiRes ?? err);
    }
);

export async function handleApiCall<T>(promise: Promise<APIResult<T>>): Promise<APIResult<T>> {
    try {
        const result = await promise;
        return result;
    } catch (error) {
        console.error('API call failed:', error);

        if (error && typeof error === 'object' && 'success' in error) {
            return error as APIResult<T>;
        }

        return {
            success: false,
            message: 'Something went wrong. Please try again later.',
            data: undefined,
            errors: [],
        };
    }
}

export default http;
