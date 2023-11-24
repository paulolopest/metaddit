import React from 'react';
import * as Icon from '@phosphor-icons/react';
import { UserRequest } from '../../../../Requests/UserRequest';
import useAxios from '../../../../Hooks/useAxios';

const CmtHeader = ({ community, user }) => {
	const [isFlwd, setIsFlwd] = React.useState(false);

	const { post, deleteReq } = useAxios();

	const userReq = new UserRequest();

	const followedCmt = React.useMemo(() => {
		let cmtArray = [];
		user?.data?.User_Community_Follow.forEach((cmt) => {
			cmtArray = [...cmtArray, cmt.community_id];
		});

		return cmtArray;
	}, [user?.data?.User_Community_Follow]);

	const clickFollow = React.useCallback(() => {
		const { url, headers } = userReq.FOLLOW_COMMUNITY(community?.data?.id);

		post(url, null, { headers });

		setIsFlwd(true);
	}, []);
	const clickUnfollow = React.useCallback(() => {
		const { url, headers } = userReq.UNFOLLOW_COMMUNITY(community?.data?.id);

		deleteReq(url, { headers });

		setIsFlwd(false);
	}, []);

	React.useEffect(() => {
		const checkFollow = followedCmt.includes(community?.data?.id);

		if (checkFollow) setIsFlwd(true);

		console.log(isFlwd);
	}, [community?.data?.id, followedCmt, isFlwd, clickFollow, clickUnfollow]);

	return (
		<div className="community-hdr">
			{community?.data?.banner_img ? (
				<img src={community?.data?.banner_img} />
			) : (
				<div className="cmt-hdr-banner" />
			)}

			<div className="cmt-hdr-info">
				<div className="cmt-hdr-if-name">
					{community?.data?.profile_img ? (
						<img src={community?.data?.profile_img} />
					) : (
						<div className="cmt-logo">m/</div>
					)}

					<div className="cmt-if-title">
						<p>{community?.data?.name}</p>
						<span>m/{community?.data?.name}</span>
					</div>

					<div className="cmt-if-btn">
						{isFlwd ? (
							<button onClick={clickUnfollow} className="cmt-btn-out"></button>
						) : (
							<button onClick={clickFollow} className="cmt-btn-in">
								Entrar
							</button>
						)}
						<div>
							<Icon.Bell weight="fill" />
						</div>
					</div>
				</div>

				<div className="cmt-hdr-if-ftr">
					<p>Posts</p>
					<p>Wiki</p>
					<p>Filtros inclusivos</p>
					<p>Filtros exclusivos</p>
					<p>Comunidade</p>
				</div>
			</div>
		</div>
	);
};

export default CmtHeader;
