import React from 'react';
import './Header.scss';
import useMedia from './../../Hooks/useMedia';
import HMenu from './../../Assets/icons/HMenu';
import HdrLeftBar from './components/HdrLeftBar';
import Chevron from '../../Assets/icons/Chevron';
import PlusIcon from '../../Assets/icons/PlusIcon';
import ExitIcon from '../../Assets/icons/ExitIcon';
import LoginIcon from '../../Assets/icons/LoginIcon';
import LupaIcon from './../../Assets/icons/LupaIcon';
import SiteIcon from './../../Assets/icons/SiteIcon';
import HomeIcon from './../../Assets/icons/HomeIcon';
import KarmaIcon from './../../Assets/icons/KarmaIcon';
import ProfileIcon from '../../Assets/icons/ProfileIcon';
import { UserContext } from '../../Contexts/UserContext';
import PopularIcon from '../../Assets/icons/PopularIcon';
import whiteBanner from '../../Assets/imgs/metaddit_white.png';
import blackBanner from '../../Assets/imgs/metaddit_black.png';
import LoginModal from '../../Pages/Login/LoginModal/LoginModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ExclamationIcon from './../../Assets/icons/ExclamationIcon';
import NotificationIcon from '../../Assets/icons/NotificationIcon';
import InterrogationIcon from './../../Assets/icons/InterrogationIcon';

const Header = () => {
	const [loginModal, setLoginModal] = React.useState(false);
	const [userPanel, setUserPanel] = React.useState(false);
	const [leftBar, setLeftBar] = React.useState(false);

	const { data, loading, login, userLogout, getProfile } = React.useContext(UserContext);

	const location = useLocation();
	const navigate = useNavigate();
	const mediumScreen = useMedia('(max-width: 1025px)');
	const smallScreen = useMedia('(max-width: 800px)');
	const mobileScreen = useMedia('(max-width: 600px)');

	const onClickOutside = (event) => {
		if (loginModal || userPanel || leftBar) {
			if (event.target === event.currentTarget) {
				setLoginModal(false);
				setUserPanel(false);
				setLeftBar(false);
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
				<div onClick={() => navigate('/')} className="hrd-logo-ctr">
					{mediumScreen && <HMenu onClick={() => setLeftBar(!leftBar)} />}
					<div className="hdr-siteIcons">
						<SiteIcon />
						{!smallScreen && <img className="logo-banner" src={blackBanner} alt="site banner" />}
					</div>
				</div>

				<div className={login ? 'hdr-userList' : 'displayNone'}>
					<div>
						<HomeIcon />
						<p>Página inicial</p>
					</div>

					<Chevron rotate={90} />
				</div>

				{!mobileScreen ? (
					<>
						<div className="hdr-search">
							<LupaIcon stroke={'#a1a1a1'} />
							<input placeholder="Pesquisar no Metaddit" />
						</div>

						<div className={login ? 'hdr-nav' : 'displayNone'}>
							<div>
								<PopularIcon />
							</div>
							<div>
								<NotificationIcon />
							</div>
							<div>
								<PlusIcon />
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
												<KarmaIcon />
												<p>{data?.karma} Karma</p>
											</div>
										</div>
									</div>
									<Chevron rotate={90} />
								</>
							</div>
						) : (
							<button onClick={() => setLoginModal(!loginModal)} className="hdr-loginButton">
								Entrar
							</button>
						)}
					</>
				) : (
					<>
						<div className="hdr-mbl-user-interaction">
							<LupaIcon />

							<Link to={'/login'}>
								<LoginIcon />
							</Link>
						</div>
					</>
				)}
			</div>

			{userPanel && (
				<div className="user-pnl-ctr animeDown">
					<div className="user-pnl-config">
						<div className="upc-hdr">
							<ProfileIcon />
							<p>As minhas coisas</p>
						</div>

						<div className="upc-list">
							<Link to={'/profile'}>Perfil</Link>

							<Link to={'/settings'}>Configurações</Link>

							<a>Modo escuro</a>
						</div>
					</div>

					<div className="user-pnl-extras">
						<div>
							<PlusIcon />
							<p>Criar uma comunidade</p>
						</div>
						<div>
							<InterrogationIcon />
							<p>Centro de ajuda</p>
						</div>
						<div>
							<ExclamationIcon />
							<p>Termos e Políticas</p>
						</div>
					</div>

					<div onClick={userLogout} className="up-exit">
						<ExitIcon />
						<p>Terminar sessão</p>
					</div>
				</div>
			)}

			{loginModal && <LoginModal onClickOutside={onClickOutside} setLoginModal={setLoginModal} />}
			{leftBar && <HdrLeftBar onClickOutside={onClickOutside} />}
		</>
	);
};

export default Header;
