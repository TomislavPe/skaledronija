import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { setUserName, setUserColor } from "../../features/scaledroneSlice";
import styles from "./UserLogin.module.css";
import {
	colorOptions,
	getRandomName,
	invertRGBColor,
} from "../../features/loginOptions";

const UserLogin = ({ login }) => {
	const [userName, setUserNameLocal] = useState("");
	const [userColor, setUserColorLocal] = useState("");
	const [loading, setLoading] = useState(false);
	const [colorIndex, setColorIndex] = useState(0);
	const dispatch = useDispatch();

	const handleUserNameChange = (e) => {
		setUserNameLocal(e.target.value);
	};

	const handleUserColorChange = (e) => {
		setUserColorLocal(e.target.value);
		const selectedIndex = colorOptions.findIndex(
			(option) => option.value === e.target.value
		);

		if (selectedIndex !== -1) {
			setColorIndex(selectedIndex);
		}
	};

	const handleLogin = () => {
		if (userName && userColor) {
			setLoading(true);
			dispatch(setUserName(userName));
			dispatch(setUserColor(userColor));
			login(userName, userColor);
		}
	};

	const handleRandomizeColor = () => {
		const randomIndex = Math.floor(Math.random() * colorOptions.length + 1);
		setUserColorLocal(colorOptions[randomIndex].value);
		setColorIndex(randomIndex);
	};

	const handleRandomizeUser = () => {
		setUserNameLocal(getRandomName());
	};

	return (
		<div className={styles.centerContainer}>
			{loading ? (
				<h1>Spajanje...</h1>
			) : (
				<div>
					<h2>Skaledronija</h2>
					<p>Odaberite ime i boju</p>
					<br />
					<div className={styles.row}>
						<label htmlFor="userName">Korisničko Ime: </label>
						<div className={styles.formControl}>
							<input
								type="text"
								id="userName"
								value={userName}
								className={styles.formInput}
								onChange={handleUserNameChange}
							/>
						</div>
						<label htmlFor="userColor">Boja Korisnika: </label>
						<div className={styles.formControl}>
							<select
								id="userColor"
								value={colorOptions[colorIndex].value}
								className={styles.formInput}
								onChange={handleUserColorChange}
								style={{
									backgroundColor: userColor,
									color: invertRGBColor(userColor),
								}}
							>
								{colorOptions.map((option) => (
									<option
										key={option.value}
										value={option.value}
									>
										{option.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<button
								className={styles.button}
								onClick={handleRandomizeColor}
							>
								Random Boja
							</button>
							<button
								className={styles.button}
								onClick={handleRandomizeUser}
							>
								Random Korisnik
							</button>
						</div>
						<button
							className={styles.button}
							onClick={handleLogin}
							disabled={!userName || !userColor}
						>
							Prijava
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

UserLogin.propTypes = {
	login: PropTypes.func.isRequired,
};

export default UserLogin;
