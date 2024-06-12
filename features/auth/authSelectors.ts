import {RootState} from "@/app/store";

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectUserRole = (state: RootState) => state.auth.role;

export const selectUser = (state: RootState) => state.auth.user;
