import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as scaledrone from "./features/scaledroneApi";
import { receiveMessage } from "./features/messagesSlice";
import { setConnected, setUserId } from "./features/scaledroneSlice";
import NewMessage from "./components/NewMessage";
import ChatMessages from "./components/ChatMessages";
import UserLogin from "./components/UserLogin";
import styles from "./app.module.css";

function App() {
	const connected = useSelector((state) => state.scaledrone.connected);
	const dispatch = useDispatch();

	const handleReceivedMessage = (message) => {
		dispatch(receiveMessage(message));
	};

	const onConnect = () => {
		scaledrone.subscribeToMessages(handleReceivedMessage);
		dispatch(setUserId(scaledrone.getUserId()));
		dispatch(setConnected(true));
	};

	const login = (username, color) => {
		const newUser = {
			data: { name: username, color: color },
		};
		scaledrone.setUserInfo(newUser);
		scaledrone.connect(onConnect);
	};

	const sendMessage = (message) => {
		scaledrone.publishMessage(message);
	};

	useEffect(() => {
		return () => {
			scaledrone.disconnect();
		};
	}, []);

	return (
		<div className={styles.appContainer}>
			{connected ? (
				<>
					<ChatMessages />
					<NewMessage sendMessageCallback={sendMessage} />
				</>
			) : (
				<UserLogin login={login} />
			)}
		</div>
	);
}

export default App;
