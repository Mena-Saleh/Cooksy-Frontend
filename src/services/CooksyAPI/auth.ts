import http, { handleApiCall } from './base';
import { APIResult } from '../../models/common/APIResult';
import { Register } from '../../models/auth/Register';
import { Login } from '../../models/auth/Login';
import { ForgotPassword } from '../../models/auth/ForgotPassword';
import { ResetPassword } from '../../models/auth/ResetPassword';

/**
 * Register a new user
 */
export const register = (data: Register): Promise<APIResult<null>> => {
    return handleApiCall(http.post('/api/auth/register', data));
};

/**
 * Log in a user
 */
export const login = (data: Login): Promise<APIResult<null>> => {
    return handleApiCall(http.post('/api/auth/login', data));
};

/**
 * Log out the current user
 */
export const logout = (): Promise<APIResult<null>> => {
    return handleApiCall(http.post('/api/auth/logout'));
};

/**
 * Send forgot password email
 */
export const forgotPassword = (data: ForgotPassword): Promise<APIResult<null>> => {
    return handleApiCall(http.post('/api/auth/forgot-password', data));
};

/**
 * Reset user password
 */
export const resetPassword = (data: ResetPassword): Promise<APIResult<null>> => {
    return handleApiCall(http.post('/api/auth/reset-password', data));
};

/**
 * Confirm email with token
 */
export const confirmEmail = (userId: string, token: string): Promise<APIResult<null>> => {
    return handleApiCall(http.get('/api/auth/confirm-email', {
        params: { userId, token }
    }));
};

/**
 * External login redirect handlers (just URL generators for now)
 */
export const getGoogleLoginUrl = (): string => {
    return `${import.meta.env.VITE_COOKSY_API_BASE_URL}/api/auth/login/google`;
};

export const getFacebookLoginUrl = (): string => {
    return `${import.meta.env.VITE_COOKSY_API_BASE_URL}/api/auth/login/facebook`;
};
