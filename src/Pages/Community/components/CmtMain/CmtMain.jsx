import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from '@phosphor-icons/react';
import CmtInfoDesc from './CmtInfo/CmtInfoDesc';
import CmtInfoFlags from './CmtInfo/CmtInfoFlags';
import DefaultProfileIcon from '../../../../Assets/icons/redditProfile.svg';
import CmtInfoRules from './CmtInfo/CmtInfoRules';
import CmtInfoMods from './CmtInfo/CmtInfoMods';

const CmtMain = ({ user, community, isMod }) => {
	return (
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
					<CmtInfoDesc isMod={isMod} community={community} />

					<CmtInfoFlags community={community} />

					<CmtInfoRules community={community} />

					<CmtInfoMods community={community} />

					<div className="cmt-if-related"></div>
				</div>
			</div>
		</div>
	);
};

export default CmtMain;
