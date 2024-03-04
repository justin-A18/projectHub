import { configureStore } from '@reduxjs/toolkit';
import { boardSlice } from './slice/BoardSlice';
import { authSlice } from './slice/AuthSlice';

export const store = configureStore({
	reducer: {
		board: boardSlice.reducer,
		auth: authSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
