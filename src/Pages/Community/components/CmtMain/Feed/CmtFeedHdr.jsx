import React from 'react';
import * as Icon from '@phosphor-icons/react';
import DefaultProfileIcon from '../../../../../Assets/icons/redditProfile.svg';
import { timeFilterOptions } from '../../../../../Utils/Variables';

const CmtFeedHdr = ({ user, setFilter }) => {
	const [timeModal, setTimeModal] = React.useState(false);
	const [timeFilter, setTimeFilter] = React.useState({ show: false, value: 'Hoje' });

	const filterContent = (order, by, at) => {
		setFilter({ order: order, by: by, at: at });
	};

	const timeFilterArray = timeFilterOptions.map((item, index) => (
		<p
			key={index}
			onClick={() => {
				setFilter((prevState) => ({ ...prevState, at: item.value })),
					setTimeFilter((prevState) => ({ ...prevState, value: item.option }));
			}}
		>
			{item.option}
		</p>
	));

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

				<div onClick={() => filterContent('created_at', 'desc', '')}>
					<Icon.ShootingStar style={{ rotate: '90deg' }} />
					Novos
				</div>
				<div onClick={() => setTimeFilter((prevState) => ({ ...prevState, show: !timeFilter.show }))}>
					<Icon.CaretDoubleUp />
					Mais votados
				</div>

				{timeFilter.show && (
					<div onClick={() => setTimeModal(!timeModal)} className="cmt-feed-time-filter">
						<>
							<p>{timeFilter.value}</p>

							<Icon.CaretDown />
						</>

						{timeModal && <div className="time-filter-modal">{timeFilterArray}</div>}
					</div>
				)}
			</div>
		</div>
	);
};

export default CmtFeedHdr;
