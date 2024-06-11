import {createSlice, PayloadAction } from '@reduxjs/toolkit';
import {USER_TYPE} from "@/types/user";

export interface AuthState {
	isLoggedIn: boolean;
	role : USER_TYPE | null;
}

const initialState: AuthState = {
	isLoggedIn: false,
	role: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<{ role: USER_TYPE }>) => {
			state.isLoggedIn = true;
			state.role = action.payload.role;
		},
		logout: (state) => {
			state.isLoggedIn = false;
			state.role = null;
		},
	},
});

export const { login, logout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
