import "./App.css";
import { useEffect } from "react";
import * as scaledrone from "./features/scaledroneApi";
import NewMessage from "./components/NewMessage";

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
			<NewMessage />
		</>
	);
}

export default App;
