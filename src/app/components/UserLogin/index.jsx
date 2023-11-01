import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName, setUserColor } from "../../features/scaledroneSlice";
import styles from "./UserLogin.module.css";
import { colorOptions, getRandomName } from "../../features/loginOptions";

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
		const randomIndex = Math.floor(Math.random() * colorOptions.length);
		setUserColorLocal(colorOptions[randomIndex].value);
		setColorIndex(randomIndex);
	};

	const handleRandomizeUser = () => {
		setUserNameLocal(getRandomName());
	};

	function invertRGBColor(rgbString) {
		const rgbValues = rgbString.slice(4, -1).split(",").map(Number);
		const invertedValues = rgbValues.map((value) => 255 - value);
		const invertedColor = `rgb(${invertedValues[0]}, ${invertedValues[1]}, ${invertedValues[2]})`;

		return invertedColor;
	}

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
								onChange={handleUserNameChange}
								style={{ fontSize: "1rem" }}
							/>
						</div>
						<label htmlFor="userColor">Boja Korisnika: </label>
						<div className={styles.formControl}>
							<select
								id="userColor"
								value={colorOptions[colorIndex].value}
								onChange={handleUserColorChange}
								style={{ backgroundColor: userColor, color: invertRGBColor(userColor), fontSize: "1rem" }}
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

export default UserLogin;
