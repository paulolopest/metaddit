import React from 'react';
import './Community.scss';
import useAxios from './../../Hooks/useAxios';
import * as Icon from '@phosphor-icons/react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './../../Contexts/UserContext';
import { CommunityRequest } from '../../Requests/CommunityRequest';
import DefaultProfileIcon from '../../Assets/icons/redditProfile.svg';

const Community = () => {
	const [isMod, setIsMod] = React.useState(false);

	const CMTReq = new CommunityRequest();

	const user = React.useContext(UserContext);
	const params = useParams()['*'];
	const community = useAxios();

	const communityId = community?.data?.id;
	let modsId = [];

	const modIdFilter =
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

	if (community.loading) return <p>Loading...</p>;

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

					<div className="cmt-ctr-info">
						<div className="cmt-if-desc">
							<div className="cmt-if-dsc-hdr">
								<p>Sobre a comunidade</p>

								{isMod && (
									<div>
										<Icon.Shield />
										<Link to={'/'}>Moderação</Link>
									</div>
								)}
							</div>

							<div className="cmt-if-dsc-main">
								<div className="dsc-main-bio">
									{community?.data?.bio && <p>{community?.data?.bio}</p>}

									{isMod && <Icon.PencilSimple />}
								</div>

								<div className="dsc-main-ctd_at">
									<Icon.Cake />
									<p>Criado em</p>
									<p>{community?.data?.created_at.slice(0, 10).replaceAll('-', '/')}</p>
								</div>
							</div>

							<div className="cmt-if-dsc-adt-if">
								<div>
									<span> {community?.data?._count.User_Community_Follow}</span>
									<p>Membros</p>
								</div>

								<div>
									<span> {community?.data?._count.Post}</span>
									<p>Posts</p>
								</div>

								<div />
							</div>

							<div className="cmt-if-dsc-add-pst">
								<button>Criar Post</button>
							</div>

							<div className="cmt-if-dsc-ftr">
								<div>
									<Icon.EyeSlash />
									<p>Tema da comunidade</p>
								</div>

								<div className="onOff"></div>
							</div>
						</div>
						<div className="cmt-if-flags"></div>
						<div className="cmt-if-rules"></div>
						<div className="cmt-if-mods"></div>
						<div className="cmt-if-related"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Community;
