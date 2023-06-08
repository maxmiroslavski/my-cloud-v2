import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	showProfileWindow: false,
	rerenderPage: true,
	filesAmount: 0,
	errorMessage: '',
	showErrorWindow: false,
	loadingMessage: '',
	showLoadingWindow: false,
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
		showError(state, action) {
			state.showErrorWindow = action.payload;
		},
		getLoadingMessage(state, action) {
			state.loadingMessage = action.payload;
		},
		showLoading(state, action) {
			state.showLoadingWindow = action.payload;
		},
	},
});
export const {
	toggleProfileWindow,
	rerenderPage,
	setFilesAmount,
	getErrorMessage,
	showError,
	getLoadingMessage,
	showLoading,
} = uiSlice.actions;

export { uiSlice };
