import React from 'react';
import CmtFeedHdr from './Feed/CmtFeedHdr';
import CmtInfoDesc from './CmtInfo/CmtInfoDesc';
import CmtInfoMods from './CmtInfo/CmtInfoMods';
import CmtInfoFlags from './CmtInfo/CmtInfoFlags';
import CmtInfoRules from './CmtInfo/CmtInfoRules';
import Feed from '../../../../Components/Feed/Feed';

const CmtMain = ({ user, community, isMod, posts, setFilter }) => {
	return (
		<div className="community-main-sct">
			<div className="cmt-ctr">
				<div className="cmt-ctr-feed">
					<CmtFeedHdr user={user} setFilter={setFilter} />

					<Feed data={posts} />
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
