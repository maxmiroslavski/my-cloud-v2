import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showProfileWindow: false,
	rerenderPage: true,
};

const uiSlice = createSlice({
	name: 'uiSlice',
	initialState,
	reducers: {
		toggleProfileWindow(state) {
			state.showProfileWindow = !state.showProfileWindow;
		},
		rerenderPage(state) {
			state.rerenderPage = !state.rerenderPage;
		},
	},
});
export const { toggleProfileWindow, rerenderPage } = uiSlice.actions;

export { uiSlice };
