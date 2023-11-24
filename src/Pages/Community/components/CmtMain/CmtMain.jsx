import React from 'react';
import CmtInfoDesc from './CmtInfo/CmtInfoDesc';
import CmtInfoFlags from './CmtInfo/CmtInfoFlags';
import CmtInfoRules from './CmtInfo/CmtInfoRules';
import CmtInfoMods from './CmtInfo/CmtInfoMods';
import CmtFeedHdr from './Feed/CmtFeedHdr';
import CmtFeed from './Feed/CmtFeed';

const CmtMain = ({ user, community, isMod }) => {
	return (
		<div className="community-main-sct">
			<div className="cmt-ctr">
				<div className="cmt-ctr-feed">
					<CmtFeedHdr user={user} />

					<CmtFeed />
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
