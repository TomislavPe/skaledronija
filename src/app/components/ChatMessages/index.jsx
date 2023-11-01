import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ChatMessages.module.css";

const ChatMessages = () => {
	const messages = useSelector((state) => state.messages.messagesList);
	const userId = useSelector((state) => state.scaledrone.userId);

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

	return (
		<div className={styles.chatMessagesContainer}>
			<ul className={styles.messageList}>
				{messages.map((message) => (
					<li
						key={message.id}
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
