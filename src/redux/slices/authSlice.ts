import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoggedInUser } from '../../models/auth/LoggedInUser';

interface AuthState {
    isAuthenticated: boolean;
    userEmail?: string;
    userFirstName?: string;
    userLastName?: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    userEmail: undefined,
    userFirstName: undefined,
    userLastName: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPendingEmail(state, action: PayloadAction<string>) {
            state.userEmail = action.payload;
        },

        login(state, action: PayloadAction<LoggedInUser>) {
            state.isAuthenticated = true;
            state.userEmail = action.payload.email;
            state.userFirstName = action.payload.firstName;
            state.userLastName = action.payload.lastName;
        },

        logout(state) {
            state.isAuthenticated = false;
            state.userEmail = undefined;
            state.userFirstName = undefined;
            state.userLastName = undefined;
        },
    },
});

export const { setPendingEmail, login, logout } = authSlice.actions;
export default authSlice.reducer;
