import React from 'react';
import './Header.scss';
import useMedia from './../../Hooks/useMedia';
import HMenu from './../../Assets/icons/HMenu';
import HdrLeftBar from './components/HdrLeftBar';
import PlusIcon from '../../Assets/icons/PlusIcon';
import ExitIcon from '../../Assets/icons/ExitIcon';
import LoginIcon from '../../Assets/icons/LoginIcon';
import LupaIcon from './../../Assets/icons/LupaIcon';
import SiteIcon from './../../Assets/icons/SiteIcon';
import KarmaIcon from './../../Assets/icons/KarmaIcon';
import ProfileIcon from '../../Assets/icons/ProfileIcon';
import { UserContext } from '../../Contexts/UserContext';
import whiteBanner from '../../Assets/imgs/metaddit_white.png';
import blackBanner from '../../Assets/imgs/metaddit_black.png';
import LoginModal from '../../Pages/Login/LoginModal/LoginModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ExclamationIcon from './../../Assets/icons/ExclamationIcon';
import InterrogationIcon from './../../Assets/icons/InterrogationIcon';
import HdrSearchModal from './components/HdrSearchModal';
import * as Icon from '@phosphor-icons/react';
import AddCmtModal from './components/AddCmtModal';

const Header = () => {
	const [loginModal, setLoginModal] = React.useState(false);
	const [addCmtModal, setAddCmtModal] = React.useState(false);
	const [userPanel, setUserPanel] = React.useState(false);
	const [leftBar, setLeftBar] = React.useState(false);
	const [searchModal, setSearchModal] = React.useState(false);

	const { data, loading, login, userLogout, getProfile } = React.useContext(UserContext);

	const location = useLocation();
	const navigate = useNavigate();
	const mediumScreen = useMedia('(max-width: 1050px)');
	const smallScreen = useMedia('(max-width: 800px)');
	const mobileScreen = useMedia('(max-width: 600px)');

	const onClickOutside = (event) => {
		if (loginModal || userPanel || leftBar) {
			if (event.target === event.currentTarget) {
				setLoginModal(false);
				setUserPanel(false);
				setLeftBar(false);
				setAddCmtModal(false);
			}
		}
	};

	const handleEscPress = (event) => {
		if (event.keyCode === 27) {
			setUserPanel(false);
			setLoginModal(false);
			setSearchModal(false);
		}
	};

	const openAddCmt = () => {
		setLoginModal(false);
		setUserPanel(false);
		setLeftBar(false);
		setSearchModal(false);
		setAddCmtModal(true);
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
						{!mediumScreen && <img className="logo-banner" src={blackBanner} alt="site banner" />}
					</div>
				</div>

				{!mediumScreen && (
					<div className={login ? 'hdr-userList' : 'displayNone'}>
						<div>
							<Icon.House weight="fill" />
							<p>Página inicial</p>
						</div>

						<Icon.CaretDown />
					</div>
				)}

				{!mobileScreen ? (
					<>
						<div
							onClick={() => setSearchModal(true)}
							className={`hdr-search ${searchModal && 'n-border'}`}
						>
							<Icon.MagnifyingGlass color={searchModal ? '#0079d3' : '#a1a1a1'} />
							<input onBlur={() => setSearchModal(false)} placeholder="Pesquisar no Metaddit" />

							{searchModal && (
								<HdrSearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
							)}
						</div>

						{!smallScreen && (
							<div className={login ? 'hdr-nav' : 'displayNone'}>
								<div>
									<Icon.TrendUp weight="light" />
								</div>
								<div>
									<Icon.Bell weight="light" />
								</div>
								<div>
									<Icon.Plus weight="light" />
								</div>
							</div>
						)}

						{login ? (
							<div onClick={() => setUserPanel(!userPanel)} className="hdr-profile">
								<div className="hdr-profile-pic">
									{/* esse h1 embaixo é a foto de perfil */}
									<h1 />

									<div>
										<p>{data?.username}</p>
										<div>
											<KarmaIcon />
											<p>{data?.karma} Karma</p>
										</div>
									</div>
								</div>
								<Icon.CaretDown style={{ rotate: `${userPanel ? '360deg' : '180deg'}` }} />
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
							<div className="hdr-mbl-search">
								<LupaIcon />
								<input />
							</div>
							{login ? (
								<div onClick={() => setUserPanel(!userPanel)} className="mbl-pfl-pic">
									{/* esse h1 embaixo é a foto de perfil */}
									<h1 />
								</div>
							) : (
								<Link to={'/login'}>
									<LoginIcon />
								</Link>
							)}
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
						<div onClick={openAddCmt}>
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
			{addCmtModal && <AddCmtModal />}
			{leftBar && <HdrLeftBar onClickOutside={onClickOutside} />}
		</>
	);
};

export default Header;
