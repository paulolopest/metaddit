const BASE_URL = 'https://back-metaddit.vercel.app/';

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

	GET_PROFILE = (token) => {
		return {
			url: `${BASE_URL}/profile`,
			options: {
				headers: {
					Authorization: token,
				},
			},
		};
	};
}
