import ReactDOM from "react-dom/client";
import { store } from "./app/features/store";
import { Provider } from "react-redux";
import App from "./app";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	//<React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	//</React.StrictMode>
);
