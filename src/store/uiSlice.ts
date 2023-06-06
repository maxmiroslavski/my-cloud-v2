import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showProfileWindow: false,
};

const uiSlice = createSlice({
	name: 'uiSlice',
	initialState,
	reducers: {
		toggleProfileWindow(state) {
			state.showProfileWindow = !state.showProfileWindow;
		},
	},
});
export const { toggleProfileWindow } = uiSlice.actions;

export { uiSlice };
