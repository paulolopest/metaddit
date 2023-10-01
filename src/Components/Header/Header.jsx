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
import LoginModal from '../../Pages/Login/LoginModal/LoginModal';
import notificationIcon from '../../Assets/icons/notification.svg';
import homeIcon from '../../Assets/icons/home-1391-svgrepo-com.svg';
import ProfileIcon from '../../Assets/icons/profile.svg';
import InterrogationIcon from '../../Assets/icons/interrogation.svg';
import ExclamationIcon from '../../Assets/icons/exclamation.svg';
import ExitIcon from '../../Assets/icons/exit.svg';

const Header = () => {
	const [loginModal, setLoginModal] = React.useState(false);
	const [userPanel, setUserPanel] = React.useState(false);

	const location = useLocation();

	const { data, loading, login, userLogout, getProfile } = React.useContext(UserContext);

	const onClickOutside = (event) => {
		if (loginModal || userPanel) {
			if (event.target === event.currentTarget) {
				setLoginModal(false);
				setUserPanel(false);
			}
		}
	};

	const handleEscPress = (event) => {
		if (event.keyCode === 27) {
			setUserPanel(false);
			setLoginModal(false);
		}
	};

	React.useEffect(() => {
		window.addEventListener('keydown', handleEscPress);

		return () => {
			window.removeEventListener('keyDown', handleEscPress);
		};
	}, []);

	React.useEffect(() => {
		if (loginModal) {
			document.body.classList.add('loading');
		} else {
			document.body.classList.remove('loading');
		}
	}, [loginModal]);

	React.useEffect(() => {
		if (login) getProfile();
	}, [login]);

	if (loading) return <p>Loading...</p>;

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
					<div onClick={() => setUserPanel(!userPanel)} className="hdr-profile">
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
					</div>
				) : (
					<button onClick={() => setLoginModal(!loginModal)} className="hdr-loginButton">
						Entrar
					</button>
				)}
			</div>

			{userPanel && (
				<div className="user-pnl-ctr animeDown">
					<div className="user-pnl-config">
						<div className="upc-hdr">
							<img src={ProfileIcon} alt="profile icon" />
							<p>As minhas coisas</p>
						</div>

						<div className="upc-list">
							<p>Perfil</p>

							<p>Configurações</p>

							<div>
								<p>Modo escuro</p>
							</div>
						</div>
					</div>

					<div className="user-pnl-extras">
						<div>
							<img src={plusIcon} alt="add post icon" />
							<p>Criar uma comunidade</p>
						</div>
						<div>
							<img src={InterrogationIcon} alt="faq icon" />
							<p>Centro de ajuda</p>
						</div>
						<div>
							<img src={ExclamationIcon} alt="politics and terms icon" />
							<p>Termos e Políticas</p>
						</div>
					</div>

					<div onClick={userLogout} className="up-exit">
						<img src={ExitIcon} alt="exit icon" />
						<p>Terminar sessão</p>
					</div>
				</div>
			)}

			{loginModal && <LoginModal onClickOutside={onClickOutside} setLoginModal={setLoginModal} />}
		</>
	);
};

export default Header;
