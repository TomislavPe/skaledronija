import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as scaledrone from "./features/scaledroneApi";
import { receiveMessage } from "./features/messagesSlice";
import NewMessage from "./components/NewMessage";
import ChatMessages from "./components/ChatMessages";
import UserLogin from "./components/UserLogin";
import styles from "./app.module.css";

function App() {
	const messages = useSelector((state) => state.messages.messagesList);
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		data: { name: "nema korisnika", color: "red" , id: null},
	});
	const [connected, setConnected] = useState(false);

	const handleReceivedMessage = (message) => {
		dispatch(receiveMessage(message));
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
		setConnected(true);
	};

	const login = (username, color) => {
		const newUser = {
			data: { name: username, color: color },
		};
		setUser({
			...user,
			data: {
				...user.data,
				name: username,
				color: color
			},
		});
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
					<ChatMessages messages={messages} user={user} />
					<NewMessage sendMessageCallback={sendMessage} />
				</>
			) : (
				<UserLogin login={login} />
			)}
		</div>
	);
}

export default App;
