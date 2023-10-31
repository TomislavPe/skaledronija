import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	messagesList: [],
};

export const messagesSlice = createSlice({
	name: "messages",
	initialState,
	reducers: {
		receiveMessage: (state, action) => {
			state.messagesList.push(action.payload);
		},
	},
});

export const { receiveMessage } = messagesSlice.actions;

export default messagesSlice.reducer;
