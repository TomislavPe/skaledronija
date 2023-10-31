import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setConnected,
	setUserName,
	setUserColor,
	setUserId,
} from "../../features/scaledroneSlice";

const UserLogin = ({ login }) => {
	const [userName, setUserNameLocal] = useState("");
	const [userColor, setUserColorLocal] = useState("");
	const dispatch = useDispatch();

	const handleUserNameChange = (e) => {
		setUserNameLocal(e.target.value);
	};

	const handleUserColorChange = (e) => {
		setUserColorLocal(e.target.value);
	};

	const handleLogin = () => {
		if (userName && userColor) {
			dispatch(setUserName(userName));
			dispatch(setUserColor(userColor));
			login(userName, userColor);
		}
	};

	return (
		<div>
			<h2>User Login</h2>
			<div>
				<label htmlFor="userName">User Name:</label>
				<input
					type="text"
					id="userName"
					value={userName}
					onChange={handleUserNameChange}
				/>
			</div>
			<div>
				<label htmlFor="userColor">User Color:</label>
				<select
					id="userColor"
					value={userColor}
					onChange={handleUserColorChange}
				>
					<option value="">Select a color</option>
					<option value="red">Red</option>
					<option value="blue">Blue</option>
					<option value="green">Green</option>
					<option value="yellow">Yellow</option>
				</select>
			</div>
			<button onClick={handleLogin} disabled={!userName || !userColor}>
				Login
			</button>
		</div>
	);
};

export default UserLogin;
