import { IUser, TLoginData, USER_TYPE } from '@/types/user';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  isLoggedIn: boolean;
  role: USER_TYPE | null;
  user: IUser | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  role: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TLoginData>) => {
      state.isLoggedIn = true;
      state.role = action.payload.role;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.role = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
