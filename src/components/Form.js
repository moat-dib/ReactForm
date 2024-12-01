import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './Form.module.css';
export const Form = () => {
	const fieldsSchema = yup.object().shape({
		email: yup
			.string()
			.matches(
				/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
				'E-mail имеет неверную структуру ',
			),
		password: yup
			.string()
			.min(6, 'Неверный пароль. Должно быть не меньше 6 символов')
			.max(12, 'Неверный пароль. Должно быть не больше 12 символов'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: yupResolver(fieldsSchema),
	});
	let registerError = errors.email?.message;
	const onSubmit = (formData) => {
		debugger;
		console.log(formData);
	};
	return (
		<div className={styles.formStyle}>
			<h1>Register new user</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				{registerError && (
					<div className={styles.errorLabel}>{registerError}</div>
				)}
				<div>
					<input
						type="text"
						placeholder="Email Address"
						{...register('email')}
					/>
				</div>
				<div>
					<input
						type="password"
						placeholder="Enter  password"
						{...register('password')}
					/>
				</div>
				<div>
					<input
						type="password"
						placeholder="Repeat password"
						{...register('password')}
					/>
				</div>
				<div>
					<input
						type="submit"
						className={styles.formStyleSubmit}
						value="Register"
						disabled={!!registerError}
					/>
				</div>
			</form>
		</div>
	);
};
