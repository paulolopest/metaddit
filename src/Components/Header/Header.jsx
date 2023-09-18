import React from 'react';
import './Header.scss';
import arrowIcon from '../../Assets/icons/arrow.svg';
import siteIcon from '../../Assets/icons/metaddit-icon.svg';
import whiteBanner from '../../Assets/imgs/metaddit_white.png';
import blackBanner from '../../Assets/imgs/metaddit_black.png';
import homeIcon from '../../Assets/icons/home-1391-svgrepo-com.svg';
import lupaIcon from '../../Assets/icons/lupa.svg';

const Header = () => {
	return (
		<div className="ctr">
			<div className="logo-ctr">
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
				<img src={lupaIcon} />
				<input placeholder="Pesquisar no Metaddit" />
			</div>
		</div>
	);
};

export default Header;
