import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserName, setUserColor } from "../../features/scaledroneSlice";
import styles from "./UserLogin.module.css";

const UserLogin = ({ login }) => {
	const [userName, setUserNameLocal] = useState("");
	const [userColor, setUserColorLocal] = useState("");
	const [loading, setLoading] = useState(false);
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

	const colorOptions = [
		{ name: "Odaberite boju", value: "" },
		{ name: "Crvena", value: "rgb(255, 0, 0)" },
		{ name: "Plava", value: "rgb(0, 0, 255)" },
		{ name: "Zelena", value: "rgb(0, 128, 0)" },
		{ name: "Žuta", value: "rgb(255, 255, 0)" },
		{ name: "Narančasta", value: "rgb(255, 165, 0)" },
		{ name: "Ljubičasta", value: "rgb(128, 0, 128)" },
		{ name: "Roza", value: "rgb(255, 192, 203)" },
		{ name: "Smeđa", value: "rgb(139, 69, 19)" },
		{ name: "Siva", value: "rgb(128, 128, 128)" },
	];

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
							/>
						</div>
						<label htmlFor="userColor">Boja Korisnika: </label>
						<div className={styles.formControl}>
							<select
								id="userColor"
								value={userColor}
								onChange={handleUserColorChange}
							>
								{/* <option value="">Odaberite boju</option>
								<option value="red">Crvena</option>
								<option value="blue">Plava</option>
								<option value="green">Zelena</option>
								<option value="yellow">Žuta</option>
								<option value="orange">Narančasta</option>
								<option value="purple">Ljubičasta</option>
								<option value="pink">Roza</option>
								<option value="brown">Smeđa</option>
								<option value="grey">Siva</option> */}
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
