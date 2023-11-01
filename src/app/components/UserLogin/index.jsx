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
								<option value="">Odaberite boju</option>
								<option value="red">Crvena</option>
								<option value="blue">Plava</option>
								<option value="green">Zelena</option>
								<option value="yellow">Žuta</option>
								<option value="orange">Narančasta</option>
								<option value="purple">Ljubičasta</option>
								<option value="pink">Roza</option>
								<option value="brown">Smeđa</option>
								<option value="grey">Siva</option>
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
