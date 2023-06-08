import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showProfileWindow: false,
	rerenderPage: true,
	filesAmount: 0,
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
		setFilesAmount(state, action) {
			state.filesAmount = action.payload;
		},
	},
});
export const { toggleProfileWindow, rerenderPage, setFilesAmount } =
	uiSlice.actions;

export { uiSlice };
