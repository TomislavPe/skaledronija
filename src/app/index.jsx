import { useEffect, useState } from "react";
import * as scaledrone from "./features/scaledroneApi";
import NewMessage from "./components/NewMessage";
import ChatMessages from "./components/ChatMessages";
import styles from "./app.module.css";

function App() {
	const [messages, setMessages] = useState([]);
	const [user, setUser] = useState({
		data: { name: "test korisnik", color: "green" },
	});

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

	const onConnect = () => {
		scaledrone.subscribeToMessages(handleReceivedMessage);
		const userD = scaledrone.getUserId();
		setUser({
			...user,
			data: {
				...user.data,
				id: userD,
			},
		});
	};

	useEffect(() => {
		scaledrone.setUserInfo(user);
		scaledrone.connect(onConnect);

		return () => {
			scaledrone.disconnect();
		};
	}, []);

	return (
		<div className={styles.appContainer}>
			{messages && user.data.id ? (
				<>
					<ChatMessages messages={messages} user={user} />
					<NewMessage sendMessageCallback={sendMessage} />
				</>
			) : null}
		</div>
	);
}

export default App;
