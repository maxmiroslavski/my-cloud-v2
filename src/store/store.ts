import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';
import { uiSlice } from './uiSlice';
import { filesSlice } from './filesSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		ui: uiSlice.reducer,
		files: filesSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
