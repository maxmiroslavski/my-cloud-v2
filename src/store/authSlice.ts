import { createSlice } from '@reduxjs/toolkit';

const initialState: {
	token: string | null;
} = {
	token: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			const token = action.payload;
			sessionStorage.setItem('idToken', token);
			state.token = sessionStorage.getItem('idToken');
		},
		logout(state) {
			sessionStorage.clear();
			state.token = null;
		},
		getUserEmail(_, action) {
			sessionStorage.setItem('userEmail', action.payload);
		},
	},
});
export const { login, logout, getUserEmail } = authSlice.actions;

export { authSlice };
