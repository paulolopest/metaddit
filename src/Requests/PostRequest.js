const BASE_URL = 'https://back-metaddit.vercel.app';
const token = window.localStorage.getItem('token');

export class PostRequest {
	ADD_POST = (communityId) => {
		return {
			url: `${BASE_URL}/post/add/${communityId}`,
			headers: {
				Authorization: token,
			},
		};
	};
}
