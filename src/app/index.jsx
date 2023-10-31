import { useEffect, useState } from "react";
import * as scaledrone from "./features/scaledroneApi";
import NewMessage from "./components/NewMessage";
import ChatMessages from "./components/ChatMessages";
import UserLogin from "./components/UserLogin";
import styles from "./app.module.css";

function App() {
	const [messages, setMessages] = useState([]);
	// const [user, setUser] = useState({
	// 	data: { name: "test korisnik", color: "green" },
	// });
	const [user, setUser] = useState(null);

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
		setUser({
			...user,
			data: {
				...user.data,
				id: scaledrone.getUserId(),
			},
		});
	};

	useEffect(() => {
		scaledrone.setUserInfo(user);
		scaledrone.connect(onConnect);

		return () => {
			scaledrone.disconnect();
		};
	}, [user]);

	return (
		<div className={styles.appContainer}>
			{messages && user ? (
				<>
					<ChatMessages messages={messages} user={user} />
					<NewMessage sendMessageCallback={sendMessage} />
				</>
			) : (
				<UserLogin setUser={setUser}/>
			)}
		</div>
	);
}

export default App;
