const BASE_URL = 'https://back-metaddit.vercel.app';
const token = window.localStorage.getItem('token');

export class CommunityRequest {
	CREATE_COMMUNITY = () => {
		return {
			url: `${BASE_URL}/community/create`,
			headers: {
				Authorization: token,
			},
		};
	};

	GET_COMMUNITY = (name) => {
		return {
			url: `${BASE_URL}/community/${name}`,
		};
	};

	GET_MODS = (communityId) => {
		return {
			url: `${BASE_URL}/community/${communityId}/get/mods`,
		};
	};

	VERIFY_MOD = (communityName) => {
		return {
			url: `${BASE_URL}/community/${communityName}/mod/verify`,
			headers: {
				Authorization: token,
			},
		};
	};
}
