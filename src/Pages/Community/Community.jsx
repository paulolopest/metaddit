import React from 'react';
import './Community.scss';
import { useParams } from 'react-router-dom';
import useAxios from './../../Hooks/useAxios';
import CmtMain from './components/CmtMain/CmtMain';
import CmtHeader from './components/CmtHeader/CmtHeader';
import { UserContext } from './../../Contexts/UserContext';
import { CommunityRequest } from '../../Requests/CommunityRequest';

const Community = () => {
	const [isMod, setIsMod] = React.useState(false);

	const CMTReq = new CommunityRequest();

	const community = useAxios();
	const cmtFeed = useAxios();
	const params = useParams()['*'];
	const user = React.useContext(UserContext);

	const communityId = community?.data?.id;
	let modsId = [];
	community?.data &&
		community?.data?.Community_Mods.filter((mod) => {
			return (modsId = [...modsId, mod.user_id]);
		});

	React.useEffect(() => {
		if (params) {
			const { url } = CMTReq.GET_COMMUNITY(params);

			community.get(url);
		}
	}, [params]);

	React.useEffect(() => {
		const verifyMod = modsId.find((id) => id === user?.data?.id);

		if (verifyMod) {
			setIsMod(true);
		} else {
			setIsMod(false);
		}
	}, [params, communityId, modsId, isMod]);

	React.useEffect(() => {
		const { url } = CMTReq.GET_COMMUNITY_POSTS(communityId);

		cmtFeed.get(url);
	}, [community?.data?.id]);

	if (community.loading || cmtFeed.loading) return <p>Loading...</p>;

	return (
		<div className="communityPage">
			<CmtHeader community={community} user={user} />

			<CmtMain user={user} community={community} isMod={isMod} posts={cmtFeed} />
		</div>
	);
};

export default Community;
