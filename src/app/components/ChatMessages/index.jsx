import ListGroup from "react-bootstrap/ListGroup";
import styles from "./ChatMessages.module.css";

const ChatMessages = ({ messages }) => {
	return (
		<div className={styles.chatMessagesContainer}>
			<ListGroup>
				{messages &&
					messages.map((message) => (
						<ListGroup.Item key={message.id}>
							User:{message.member.clientData.name}, Message:{" "}
							{message.data}
						</ListGroup.Item>
					))}
			</ListGroup>
		</div>
	);
};

export default ChatMessages;
