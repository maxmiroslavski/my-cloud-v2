import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showProfileWindow: false,
	rerenderPage: true,
	filesAmount: 0,
	errorMessage: '',
	loadingMessage: '',
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
		getErrorMessage(state, action) {
			state.errorMessage = action.payload;
		},
		getLoadingMessage(state, action) {
			state.loadingMessage = action.payload;
		},
	},
});
export const {
	toggleProfileWindow,
	rerenderPage,
	setFilesAmount,
	getErrorMessage,
	getLoadingMessage,
} = uiSlice.actions;

export { uiSlice };
