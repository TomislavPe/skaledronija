import { useEffect, useState } from "react";
import * as scaledrone from "./features/scaledroneApi";
import NewMessage from "./components/NewMessage";
import ChatMessages from "./components/ChatMessages";
import styles from "./app.module.css";

function App() {
	const [messages, setMessages] = useState([]);

	const addMessage = (message) => {
		setMessages((prevMessages) => {
			return [...prevMessages, message];
		});
	};

	const handleReceivedMessage = (message) => {
		addMessage(message);
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
