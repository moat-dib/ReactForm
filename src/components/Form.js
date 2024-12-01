import styles from './Form.module.css';
export const Form = () => {
	return (
		<div className={styles.formStyle}>
			<h1>Register new user</h1>
			<form>
				<div>
					<input type="email" name="field1" placeholder="Email Address" />
				</div>
				<div>
					<input type="password" name="field2" placeholder="Enter  password" />
				</div>
				<div>
					<input type="password" name="field3" placeholder="Repeat password" />
				</div>
				<div>
					<input
						type="submit"
						className={styles.formStyleSubmit}
						value="Register"
					/>
				</div>
			</form>
		</div>
	);
};
