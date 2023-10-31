import React, { useState } from "react";

const UserLogin = ({ login }) => {
	const [userName, setUserName] = useState("");
	const [userColor, setUserColor] = useState("");

	const handleUserNameChange = (e) => {
		setUserName(e.target.value);
	};

	const handleUserColorChange = (e) => {
		setUserColor(e.target.value);
	};

	const handleLogin = () => {
		if (userName && userColor) {
			login(userName, userColor)
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
