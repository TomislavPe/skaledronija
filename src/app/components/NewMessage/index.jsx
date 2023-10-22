import { useState } from "react";

const NewMessage = () => {
	const [newMessage, setNewMessage] = useState("");

	const handleNewMessageChange = (event) => {
		console.log(event.target.value);
        setNewMessage(event.target.value);
		return true;
	};

	const handleSendMessage = (event) => {
		console.log("poslana poruka: ", newMessage);
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSendMessage}>
			<input
				type="text"
				value={newMessage}
				onChange={handleNewMessageChange}
			/>
			<input type="submit" value="Pošalji" />
		</form>
	);
};

export default NewMessage;
