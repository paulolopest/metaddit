const BASE_URL = 'https://back-metaddit.vercel.app';
const token = window.localStorage.getItem('token');

export class UserRequest {
	USER_LOGIN = () => {
		return {
			url: `${BASE_URL}/login`,
		};
	};

	USER_SIGNUP = () => {
		return {
			url: `${BASE_URL}/signup`,
		};
	};

	GET_PROFILE = () => {
		return {
			url: `${BASE_URL}/profile`,
			options: {
				headers: {
					Authorization: token,
				},
			},
		};
	};

	VALIDATE_TOKEN = () => {
		return {
			url: `${BASE_URL}/user/validate-token`,
		};
	};
}
