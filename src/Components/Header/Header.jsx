import React from 'react';
import './Header.scss';
import arrowIcon from '../../Assets/icons/arrow.svg';
import siteIcon from '../../Assets/icons/metaddit-icon.svg';
import whiteBanner from '../../Assets/imgs/metaddit_white.png';
import blackBanner from '../../Assets/imgs/metaddit_black.png';
import homeIcon from '../../Assets/icons/home-1391-svgrepo-com.svg';
import lupaIcon from '../../Assets/icons/lupa.svg';
import notificationIcon from '../../Assets/icons/notification.svg';
import plusIcon from '../../Assets/icons/plus.svg';
import popularIcon from '../../Assets/icons/popular.svg';

const Header = () => {
	return (
		<div className="ctr">
			<div className="hrd-logo-ctr">
				<img className="logo-icon" src={siteIcon} alt="site icon" />
				<img className="logo-banner" src={blackBanner} alt="site banner" />
			</div>

			<div className="hdr-userList">
				<div>
					<img src={homeIcon} alt="home icon" />
					<p>Página inicial</p>
				</div>

				<img src={arrowIcon} />
			</div>

			<div className="hdr-search">
				<img src={lupaIcon} alt="Search icon" />
				<input placeholder="Pesquisar no Metaddit" />
			</div>

			<div className="hdr-nav">
				<div>
					<img src={popularIcon} alt="popular icon" />
				</div>
				<div>
					<img src={notificationIcon} alt="Notification icon" />
				</div>
				<div>
					<img src={plusIcon} alt="Add post icon" />
				</div>
			</div>

			<div className="hdr-profile">
				<div className="hdr-p-fc">
					<div>
						<img src={popularIcon} alt="popular icon" />
						<div>
							<p>Nickname</p>
							<div>
								<img src={popularIcon} alt="popular icon" />
								10 Karma
							</div>
						</div>
					</div>
				</div>
				<img style={{ rotate: '90deg' }} src={arrowIcon} />
			</div>
		</div>
	);
};

export default Header;
