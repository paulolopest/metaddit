import React from 'react';
import './Community.scss';
import { Link, useParams } from 'react-router-dom';
import useAxios from './../../Hooks/useAxios';
import * as Icon from '@phosphor-icons/react';
import { CommunityRequest } from '../../Requests/CommunityRequest';
import DefaultProfileIcon from '../../Assets/icons/redditProfile.svg';
import { UserContext } from './../../Contexts/UserContext';

const Community = () => {
	const user = React.useContext(UserContext);

	const CMTReq = new CommunityRequest();

	const params = useParams()['*'];
	const community = useAxios();

	console.log(params);

	React.useEffect(() => {
		const { url } = CMTReq.GET_COMMUNITY(params);

		community.get(url);
	}, [params]);

	console.log(community.data && community.data);

	return (
		<div className="communityPage">
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
							<p>/m/{community?.data?.name}</p>
							<span>m/{community?.data?.name}</span>
						</div>

						<div className="cmt-if-btn">
							<button>Membro</button>
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

			<div className="community-main-sct">
				<div className="cmt-ctr">
					<div className="cmt-ctr-feed">
						<div className="cmt-feed-hdr">
							<div className="cmt-feed-create">
								<img src={user?.data?.profile_img ? user?.data?.profile_img : DefaultProfileIcon} />

								<button>Criar post</button>

								<div>
									<div>
										<Icon.ImageSquare />
									</div>
									<div>
										<Icon.Link />
									</div>
								</div>
							</div>

							<div className="cmt-feed-filter">
								<div>
									<Icon.Flame />
									<p>Em destaque</p>
								</div>

								<div>
									<Icon.ShootingStar style={{ rotate: '90deg' }} />
									Novos
								</div>
								<div>
									<Icon.CaretDoubleUp />
									Mais votados
								</div>
							</div>
						</div>
					</div>

					<div className="cmt-ctr-info"></div>
				</div>
			</div>
		</div>
	);
};

export default Community;
