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

	GET_FOLLOWED_COMMUNITIES = () => {
		return {
			url: `${BASE_URL}/profile/followed/communities`,
			headers: {
				Authorization: token,
			},
		};
	};
	GET_MODDED_COMMUNITIES = () => {
		return {
			url: `${BASE_URL}/profile/mod/communities`,
			headers: {
				Authorization: token,
			},
		};
	};

	VALIDATE_TOKEN = () => {
		return {
			url: `${BASE_URL}/user/validate-token`,
		};
	};

	FOLLOW_COMMUNITY = (communityId) => {
		return {
			url: `${BASE_URL}/user/follow/community/${communityId}`,
			headers: {
				Authorization: token,
			},
		};
	};

	UNFOLLOW_COMMUNITY = (communityId) => {
		return {
			url: `${BASE_URL}/user/unfollow/community/${communityId}`,
			headers: {
				Authorization: token,
			},
		};
	};
}
