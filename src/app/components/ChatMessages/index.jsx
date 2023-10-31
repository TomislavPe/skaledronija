import React from "react";
import styles from "./ChatMessages.module.css";
import testMessages from "./testMessages";

const userName = "User 1";

const ChatMessages = ({ messages }) => {
	return (
		<div className={styles.chatMessagesContainer}>
			<ul className={styles.messageList}>
				{messages &&
					messages.map((message) => (
						<li
							key={message.id}
							className={`${styles.message} ${
								message.member.clientData.name === userName
									? styles.rightMessage
									: styles.leftMessage
							}`}
							style={{
								backgroundColor:
									message.member.clientData.color,
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
