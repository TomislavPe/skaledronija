import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as scaledrone from "./features/scaledroneApi";
import NewMessage from "./components/NewMessage";
import ChatMessages from "./components/ChatMessages";
import styles from "./app.module.css";
import { receiveMessage } from "./features/messagesSlice";

function App() {
	const messages = useSelector((state) => state.messages.messagesList);
	const dispatch = useDispatch();

	const handleReceivedMessage = (message) => {
		dispatch(receiveMessage(message));
	};

	const sendMessage = (message) => {
		scaledrone.publishMessage(message);
	};

	useEffect(() => {
		scaledrone.setUserInfo("test korisnik", "green");
		scaledrone.connect();
		scaledrone.subscribeToMessages(handleReceivedMessage);

		return () => {
			scaledrone.disconnect();
		};
	}, []);

	return (
		<div className={styles.appContainer}>
			<ChatMessages messages={messages} />
			<NewMessage sendMessageCallback={sendMessage} />
		</div>
	);
}

export default App;
