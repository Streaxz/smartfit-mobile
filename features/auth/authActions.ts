import { createAsyncThunk } from '@reduxjs/toolkit';
import {login} from "@/features/auth/authStore";
import {USER_TYPE} from "@/types/user";

export const authenticateUser = createAsyncThunk(
	'auth/authenticateUser',
	async (userData: { role: USER_TYPE }, { dispatch }) => {
		dispatch(login(userData));
	}
);
