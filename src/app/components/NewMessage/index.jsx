import { useState } from "react";
import styles from "./NewMessage.module.css";

const NewMessage = ({ sendMessageCallback }) => {
	const [newMessage, setNewMessage] = useState("");

	const handleNewMessageChange = (event) => {
		setNewMessage(event.target.value);
	};

	const handleSendMessage = (event) => {
		sendMessageCallback(newMessage);
		setNewMessage("");
		event.preventDefault();
	};

	return (
		<div className={styles.centerContainer}>
			<form onSubmit={handleSendMessage}>
				<div className={styles.row}>
					<input
						type="text"
						value={newMessage}
						onChange={handleNewMessageChange}
						placeholder="Upišite poruku ovdje"
						className={styles.formControl}
					/>
					<button type="submit" className={styles.button}>
						Pošalji
					</button>
				</div>
			</form>
		</div>
	);
};

export default NewMessage;
