import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from "./messagesSlice"
import scaledroneReducer from "./scaledroneSlice"

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
        scaledrone: scaledroneReducer,
    }
});
