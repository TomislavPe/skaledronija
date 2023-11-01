import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ChatMessages.module.css";
import { useRef, useEffect } from "react";

const ChatMessages = () => {
	const messages = useSelector((state) => state.messages.messagesList);
	const userId = useSelector((state) => state.scaledrone.userId);

	const lastMessageRef = useRef(null);

	const getMessageStyle = (message) => {
		return message.member.id == userId
			? styles.rightMessage
			: styles.leftMessage;
	};

	function invertRGBColor(rgbString) {
		const rgbValues = rgbString.slice(4, -1).split(",").map(Number);
		const invertedValues = rgbValues.map((value) => 255 - value);
		const invertedColor = `rgb(${invertedValues[0]}, ${invertedValues[1]}, ${invertedValues[2]})`;

		return invertedColor;
	}

	useEffect(() => {
		if (lastMessageRef.current) {
		  lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
		}
	  }, [messages]);

	return (
		<div className={styles.chatMessagesContainer}>
			<ul className={styles.messageList}>
				{messages.map((message, index) => (
					<li
						key={message.id}
						ref={index === messages.length - 1 ? lastMessageRef : null}
						className={`${styles.message} ${getMessageStyle(
							message
						)}`}
					>
						<div
							className={`${styles.userName} ${getMessageStyle(
								message
							)}`}
						>
							{message.member.clientData.name}
						</div>
						<div
							className={`${
								styles.messageContent
							} ${getMessageStyle(message)}`}
							style={{
								backgroundColor:
									message.member.clientData.color,
							}}
						>
							<div
								style={{
									color: invertRGBColor(
										message.member.clientData.color
									),
								}}
							>
								{message.data}
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

ChatMessages.defaultProps = {
	messages: [],
	userId: "",
};

ChatMessages.propTypes = {
	messages: PropTypes.array.isRequired,
	userId: PropTypes.string.isRequired,
};

export default ChatMessages;
