import { useEffect } from "react";
import * as scaledrone from "./features/scaledroneApi";
import NewMessage from "./components/NewMessage";
import ChatMessages from "./components/ChatMessages";

function App() {
	const handleReceivedMessage = (message) => {
		console.log("message received: ", message);
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
		<>
			<ChatMessages />
			<NewMessage sendMessageCallback={sendMessage} />
		</>
	);
}

export default App;
