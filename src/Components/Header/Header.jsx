import React from 'react';
import './Header.scss';
import { useLocation } from 'react-router-dom';
import lupaIcon from '../../Assets/icons/lupa.svg';
import plusIcon from '../../Assets/icons/plus.svg';
import arrowIcon from '../../Assets/icons/arrow.svg';
import popularIcon from '../../Assets/icons/popular.svg';
import karmaIcon from '../../Assets/icons/karma-icon.svg';
import siteIcon from '../../Assets/icons/metaddit-icon.svg';
import whiteBanner from '../../Assets/imgs/metaddit_white.png';
import blackBanner from '../../Assets/imgs/metaddit_black.png';
import notificationIcon from '../../Assets/icons/notification.svg';
import homeIcon from '../../Assets/icons/home-1391-svgrepo-com.svg';
import { UserContext } from '../../Contexts/UserContext';

const Header = () => {
	const [loginModal, setLoginModal] = React.useState(false);

	const location = useLocation();

	const user = React.useContext(UserContext);

	console.log(loginModal);

	return (
		<div className={location.pathname === '/login' ? 'displayNone' : 'hdr-ctr'}>
			<div className="hrd-logo-ctr">
				<img className="logo-icon" src={siteIcon} alt="site icon" />
				<img className="logo-banner" src={blackBanner} alt="site banner" />
			</div>

			<div className={user.login ? 'hdr-userList' : 'displayNone'}>
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

			<div className={user.login ? 'hdr-nav' : 'displayNone'}>
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

			{user.login ? (
				<div className="hdr-profile">
					<div className="hdr-profile-pic">
						<h1 />
						<div>
							<p>Additional</p>
							<div>
								<img src={karmaIcon} />
								<p>10 Karma</p>
							</div>
						</div>
					</div>
					<img style={{ rotate: '90deg' }} src={arrowIcon} />
				</div>
			) : (
				<button onClick={() => setLoginModal(!loginModal)} className="hdr-loginButton">
					Entrar
				</button>
			)}
		</div>
	);
};

export default Header;
