import { useState } from 'react';
import styles from './Form.module.css';
export const Form = () => {
	const [email, setEmail] = useState('');
	const [registerError, setRegisterError] = useState(null);
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const onEmailBlur = ({ target }) => {
		setEmail(target.value);
		let newError = null;
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(target.value)) {
			newError = 'E-mail имеет неверную структуру';
		}
		setRegisterError(newError);
	};
	const onPasswordBlur = ({ target }) => {
		setPassword1(target.value);
		let newError = null;
		if (target.value.length < 6 || target.value.length > 12) {
			newError = 'Пароль должен содержать от 6 до 12 символов';
			setRegisterError(newError);
		} else {
			if (password1 !== password2) {
				setRegisterError('Пароли не равны');
			} else {
				setRegisterError(null);
			}
		}
	};
	return (
		<div className={styles.formStyle}>
			<h1>Register new user</h1>
			<form>
				{registerError && (
					<div className={styles.errorLabel}>{registerError}</div>
				)}
				<div>
					<input
						type="text"
						name="field1"
						placeholder="Email Address"
						value={email}
						onChange={({ target }) => {
							setEmail(target.value);
						}}
						onBlur={onEmailBlur}
					/>
				</div>
				<div>
					<input
						type="password"
						name="field2"
						placeholder="Enter  password"
						value={password1}
						onChange={({ target }) => {
							setPassword1(target.value);
						}}
						onBlur={onPasswordBlur}
					/>
				</div>
				<div>
					<input
						type="password"
						name="field3"
						value={password2}
						onChange={({ target }) => {
							setPassword2(target.value);
						}}
						onBlur={onPasswordBlur}
						placeholder="Repeat password"
					/>
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
