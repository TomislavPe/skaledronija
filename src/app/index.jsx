import "./App.css";
import { useEffect } from "react";
import * as scaledrone from "./features/scaledroneApi";
import NewMessage from "./components/NewMessage";
import ChatWindow from "./components/ChatWindow";

function App() {
	const handleReceivedMessage = (message) => {
		console.log("message received: ", message);
	};

	const sendMessage = (message) => {
		scaledrone.publishMessage(message);
	};

	useEffect(() => {
		scaledrone.connect();
		scaledrone.subscribeToMessages(handleReceivedMessage);

		return () => {
			scaledrone.disconnect();
		};
	}, []);

	return (
		<>
			<h1>test</h1>
			<ChatWindow />
			<NewMessage sendMessageCallback={sendMessage} />
		</>
	);
}

export default App;
