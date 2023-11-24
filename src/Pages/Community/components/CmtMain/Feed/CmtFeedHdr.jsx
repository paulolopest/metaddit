import React from 'react';
import * as Icon from '@phosphor-icons/react';
import DefaultProfileIcon from '../../../../../Assets/icons/redditProfile.svg';

const CmtFeedHdr = ({ user }) => {
	return (
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
	);
};

export default CmtFeedHdr;
