import "./App.css";

function App() {
	return <>{import.meta.env.VITE_CHANNEL_ID}
	{import.meta.env.VITE_SECRET_KEY}</>;
}

export default App;
