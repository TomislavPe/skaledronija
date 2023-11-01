import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	connected: false,
	userName: "nema korisnika",
	userColor: 'rgb(255, 0, 0)',
	userId: "",
};

export const scaledroneSlice = createSlice({
	name: "scaledrone",
	initialState,
	reducers: {
		setConnected: (state, action) => {
			state.connected = action.payload;
		},
		setUserName: (state, action) => {
			state.userName = action.payload;
		},
		setUserColor: (state, action) => {
			state.userColor = action.payload;
		},
		setUserId: (state, action) => {
			state.userId = action.payload;
		},
	},
});

export const { setConnected, setUserName, setUserColor, setUserId } =
	scaledroneSlice.actions;

export default scaledroneSlice.reducer;
