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
}
