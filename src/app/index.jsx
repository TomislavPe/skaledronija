import "./App.css";
import * as scaledrone from "./features/scaledroneApi";

function App() {
	scaledrone.connect();

	const handleMessage = (message) => { console.log("message received: ", message) }

	scaledrone.subscribe(handleMessage);
	
	return (
		<>
			<div>test</div>
		</>
	);
}

export default App;
