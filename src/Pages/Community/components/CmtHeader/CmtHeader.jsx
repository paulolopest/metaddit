import React from 'react';
import * as Icon from '@phosphor-icons/react';

const CmtHeader = ({ community }) => {
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
	);
};

export default CmtHeader;
