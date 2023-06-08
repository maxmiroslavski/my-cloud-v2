import { createSlice } from '@reduxjs/toolkit';

const initialState: {
	files: { size: string; id: string }[];
} = {
	files: [],
};

const filesSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		addFile(state, action) {
			state.files.push(action.payload);
		},
		removeFile(state, action) {
			state.files;
		},
	},
});
export const { addFile } = filesSlice.actions;

export { filesSlice };
