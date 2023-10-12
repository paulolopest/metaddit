import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserRequest } from '../Requests/UserRequest';

export const UserContext = React.createContext('');

const userRequest = new UserRequest();

const UserStorage = ({ children }) => {
	const [data, setData] = React.useState(null);
	const [error, setError] = React.useState(null);
	const [login, setLogin] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	const navigate = useNavigate();
	const token = window.localStorage.getItem('token');

	const userLogout = () => {
		setData(null);
		setError(null);
		setLoading(false);

		window.localStorage.removeItem('token');
		window.location.reload();
		setLogin(false);
	};

	const userLogin = React.useCallback(async (credential, password) => {
		let req;
		try {
			setData(null);
			setError(null);
			setLoading(true);

			const body = {
				credential,
				password,
			};

			const { url } = userRequest.USER_LOGIN();
			req = await axios.post(url, body);

			window.localStorage.setItem('token', req.data);

			await getProfile(token);

			window.location.reload();
			setLogin(true);
		} catch (err) {
			setData(null);
			setError(err.response.data);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	}, []);

	const userRegister = React.useCallback(async (email, password, username) => {
		let req;
		try {
			setData(null);
			setError(null);
			setLoading(true);

			const body = {
				email,
				password,
				username,
			};

			const { url } = userRequest.USER_SIGNUP();
			req = await axios.post(url, body);

			window.localStorage.setItem('token', req.data);

			await getProfile();
			setLogin(true);
			navigate('/');
		} catch (err) {
			setData(null);
			setError(err.response.data);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	}, []);

	const getProfile = React.useCallback(async (token) => {
		try {
			setData(null);
			setError(null);
			setLoading(true);

			const { url, options } = userRequest.GET_PROFILE(token);

			const req = await axios.get(url, options);

			setData(req.data);
		} catch (err) {
			setData(null);
			setError(err.response.data);
			setLoading(false);
		} finally {
			setLoading(false);
		}
	}, []);

	React.useEffect(() => {
		const autoLogin = async () => {
			if (token) {
				try {
					setError(null);
					setLoading(true);

					const { url } = userRequest.VALIDATE_TOKEN();
					const res = await axios.post(url, { token: token });

					if (res.status !== 200) throw new Error('Invalid credentials');

					setLogin(true);
				} catch (err) {
					userLogout();
				} finally {
					setLoading(false);
				}
			}
		};

		autoLogin();
	}, []);

	return (
		<UserContext.Provider
			value={{ userLogin, userRegister, userLogout, getProfile, data, error, login, loading }}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserStorage;
