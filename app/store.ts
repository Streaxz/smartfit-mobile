import authReducer from '@/features/auth/authStore';
import { trainerRootReducer } from '@/features/trainer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    auth: authReducer,
    trainer: trainerRootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
