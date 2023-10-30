import styles from "./ChatMessages.module.css";

const ChatMessages = ({ messages }) => {
	return (
		<div className={styles.chatMessagesContainer}>
			<ul>
				{messages &&
					messages.map((message) => (
						<li key={message.id}>
							User:{message.member.clientData.name}, Message:{" "}
							{message.data}
						</li>
					))}
			</ul>
		</div>
	);
};

export default ChatMessages;
