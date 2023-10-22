import "./App.css";
import * as scaledrone from "./features/scaledroneApi";
import NewMessage from "./components/NewMessage";

function App() {
	// scaledrone.connect();

	// const handleMessage = (message) => { console.log("message received: ", message) }

	// const sendMessage = (message) => { scaledrone.publishMessage("testni mesag") }

	// scaledrone.subscribeToMessages(handleMessage);

	
	return (
		<>
			<h1>test</h1>
			<NewMessage/>
		</>
	);
}

export default App;
