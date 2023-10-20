import "./App.css";
import * as scaledrone from "./features/scaledroneApi";

function App() {
	scaledrone.connect();

	const handleMessage = (message) => { console.log("message received: ", message) }

	const sendMessage = (message) => { scaledrone.publishMessage("testni mesag") }

	scaledrone.subscribeToMessages(handleMessage);

	
	return (
		<>
			<div>test</div>
			<button onClick={sendMessage}>Test message</button>
		</>
	);
}

export default App;
