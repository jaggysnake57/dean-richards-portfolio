import { useState } from 'react';
import { useHistory } from 'react-router';
import { auth } from '../firebase';
import '../css/Pages/Signin/Main.css';

const Signin = () => {
	const history = useHistory();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const login = async (e) => {
		e.preventDefault();

		try {
			await auth.signInWithEmailAndPassword(email, password);
			history.push('/');
		} catch (error) {
			if ((error.code = 'auth/user-not-found')) {
				alert('email or password is incorect');
				console.error(error);
			}
		}
	};

	return (
		<div className="signin">
			<form className="signin__form" onSubmit={(e) => login(e)}>
				<input
					className="signin__input"
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					className="signin__input"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<button className="btn">Sign in</button>
			</form>
		</div>
	);
};

export default Signin;
