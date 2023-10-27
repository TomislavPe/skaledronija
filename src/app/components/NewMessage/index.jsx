import { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NewMessage = ({ sendMessageCallback }) => {
	const [newMessage, setNewMessage] = useState("");

	const handleNewMessageChange = (event) => {
		console.log(event.target.value);
		setNewMessage(event.target.value);
		return true;
	};

	const handleSendMessage = (event) => {
		sendMessageCallback(newMessage);
		event.preventDefault();
	};

	return (
		<Form onSubmit={handleSendMessage}>
			<Row>
				<Col>
					<FormControl
						type="text"
						value={newMessage}
						onChange={handleNewMessageChange}
						placeholder="Type your message here"
					/>
				</Col>
				<Col>
					<Button type="submit" variant="primary">
						Pošalji
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default NewMessage;
