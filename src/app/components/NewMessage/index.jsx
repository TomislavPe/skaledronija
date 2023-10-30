import { useState } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./NewMessage.module.css"

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
			<Form onSubmit={handleSendMessage}>
				<Row>
					<Col>
						<FormControl
							type="text"
							value={newMessage}
							onChange={handleNewMessageChange}
							placeholder="Upišite poruku ovdje"
						/>
					</Col>
					<Col>
						<Button type="submit" variant="primary">
							Pošalji
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default NewMessage;
