import styles from "./ChatMessages.module.css";

const ChatMessages = ({ messages, user }) => {
	return (
		<div className={styles.chatMessagesContainer}>
			<ul className={styles.messageList}>
				{messages.map((message) => (
					<li
						key={message.id}
						className={`${styles.message} ${
							message.member.id == user.data.id
								? styles.rightMessage
								: styles.leftMessage
						}`}
						style={{
							backgroundColor: message.member.clientData.color,
						}}
					>
						<div className={styles.userName}>
							{message.member.clientData.name}
						</div>
						<div className={styles.messageContent}>
							{message.data}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChatMessages;
