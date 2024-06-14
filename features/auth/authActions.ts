import { login } from '@/features/auth/authStore';
import { TLoginData } from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const authenticateUser = createAsyncThunk(
  'auth/authenticateUser',
  async (userData: TLoginData, { dispatch }) => {
    dispatch(login(userData));
  }
);
