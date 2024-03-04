import { createSlice } from '@reduxjs/toolkit';
import { AuthState, PayloadLogin, User } from '../../types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
	users: [],
	isLogged: false,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		registerUser: (state, action: PayloadAction<User>) => {
			const user = action.payload;
			state.users = [...state.users, user];
		},

		loginUser: (state, action: PayloadAction<PayloadLogin>) => {
			const { email, password } = action.payload;
			const user = state.users.find(
				(user) => user.email === email && user.password === password
			);

			if (user) {
				state.isLogged = true;
				user.isActive = true;
			}
		},

		logoutUser: (state) => {
			state.isLogged = false;

			state.users = state.users.map((user) => {
				return {
					...user,
					isActive: false,
				};
			});
		},
	},
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
