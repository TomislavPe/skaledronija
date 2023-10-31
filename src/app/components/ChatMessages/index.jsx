import React from "react";
import styles from "./ChatMessages.module.css";
import testMessages from "./testMessages";

const userName = "User 1"; // Replace with the local user's name

const ChatMessages = ({ messages }) => {
	return (
		<div className={styles.chatMessagesContainer}>
			<ul className={styles.messageList}>
				{messages &&
					testMessages.map((message) => (
						<li
							key={message.id}
							className={`${styles.message} ${
								message.member.clientData.name === userName
									? styles.rightMessage
									: styles.leftMessage
							}`}
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
