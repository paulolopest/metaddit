import React from 'react';
import './Header.scss';
import { useLocation } from 'react-router-dom';
import lupaIcon from '../../Assets/icons/lupa.svg';
import plusIcon from '../../Assets/icons/plus.svg';
import arrowIcon from '../../Assets/icons/arrow.svg';
import { UserContext } from '../../Contexts/UserContext';
import popularIcon from '../../Assets/icons/popular.svg';
import karmaIcon from '../../Assets/icons/karma-icon.svg';
import siteIcon from '../../Assets/icons/metaddit-icon.svg';
import whiteBanner from '../../Assets/imgs/metaddit_white.png';
import blackBanner from '../../Assets/imgs/metaddit_black.png';
import notificationIcon from '../../Assets/icons/notification.svg';
import homeIcon from '../../Assets/icons/home-1391-svgrepo-com.svg';
import LoginModal from '../../Pages/Login/LoginModal/LoginModal';

const Header = () => {
	const [userList, setUserList] = React.useState(false);
	const [loginModal, setLoginModal] = React.useState(false);

	const { data, loading, login, userLogout, getProfile } = React.useContext(UserContext);

	const location = useLocation();

	React.useEffect(() => {
		getProfile();
	}, [login]);

	if (data)
		return (
			<>
				<div className={location.pathname === '/login' ? 'displayNone' : 'hdr-ctr'}>
					<div className="hrd-logo-ctr">
						<img className="logo-icon" src={siteIcon} alt="site icon" />
						<img className="logo-banner" src={blackBanner} alt="site banner" />
					</div>

					<div className={login ? 'hdr-userList' : 'displayNone'}>
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

					<div className={login ? 'hdr-nav' : 'displayNone'}>
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

					{login ? (
						<div onClick={() => setUserList(!userList)} className="hdr-profile">
							<>
								<div className="hdr-profile-pic">
									<h1 />
									<div>
										<p>{data?.username}</p>
										<div>
											<img src={karmaIcon} />
											<p>{data?.karma} Karma</p>
										</div>
									</div>
								</div>
								<img style={{ rotate: '90deg' }} src={arrowIcon} />
							</>

							{userList && (
								<div className="hdr-prf-list">
									<button onClick={() => userLogout()}>Sair</button>
								</div>
							)}
						</div>
					) : (
						<button onClick={() => setLoginModal(!loginModal)} className="hdr-loginButton">
							Entrar
						</button>
					)}
				</div>

				{loginModal && <LoginModal setLoginModal={setLoginModal} />}
			</>
		);
};

export default Header;
