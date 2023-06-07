import { createSlice } from '@reduxjs/toolkit';

const initialState: {
	token: string | null;
	email: string | null;
} = {
	token: '',
	email: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			const token = action.payload;
			sessionStorage.setItem('idToken', token);
			state.token = token;
		},
		logout(state) {
			sessionStorage.clear();
			state.token = null;
		},
		getUserEmail(state, action) {
			state.email = action.payload;
		},
	},
});
export const { login, logout, getUserEmail } = authSlice.actions;

export { authSlice };
