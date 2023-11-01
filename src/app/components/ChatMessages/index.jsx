import styles from "./ChatMessages.module.css";
import { useSelector } from "react-redux";

const ChatMessages = () => {
	const messages = useSelector((state) => state.messages.messagesList);
	const userId = useSelector((state) => state.scaledrone.userId);
	return (
		<div className={styles.chatMessagesContainer}>
			<ul className={styles.messageList}>
				{messages.map((message) => (
					<li
						key={message.id}
						className={`${styles.message} ${
							message.member.id == userId
								? styles.rightMessage
								: styles.leftMessage
						}`}
					>
						<div className={styles.userName}>
							{message.member.clientData.name}
						</div>
						<div
							className={styles.messageContent}
							style={{
								backgroundColor:
									message.member.clientData.color,
							}}
						>
							{message.data}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChatMessages;
