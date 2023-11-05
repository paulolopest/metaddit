import './Header.scss';
import React from 'react';
import useUtils from '../../Hooks/useUtils';
import * as Icon from '@phosphor-icons/react';
import useAxios from './../../Hooks/useAxios';
import SiteIcon from './../../Assets/icons/SiteIcon';
import KarmaIcon from './../../Assets/icons/KarmaIcon';
import { UserContext } from '../../Contexts/UserContext';
import UserPanel from './components/UserPanel/UserPanel';
import { UserRequest } from './../../Requests/UserRequest';
import HdrNavList from './components/HdrNavList/HdrNavList';
import { GlobalContext } from '../../Contexts/GlobalContext';
import whiteBanner from '../../Assets/imgs/metaddit_white.png';
import blackBanner from '../../Assets/imgs/metaddit_black.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HdrSearchModal from './components/HdrSearchModal/HdrSearchModal';

const Header = () => {
	const [navList, setNavList] = React.useState(false);
	const [userPanel, setUserPanel] = React.useState(false);
	const [searchModal, setSearchModal] = React.useState(false);

	const { data, loading, login, getProfile } = React.useContext(UserContext);
	const { leftBar, loginModal, setLeftBar, smallScreen, mediumScreen, mobileScreen, setLoginModal } =
		React.useContext(GlobalContext);

	const ur = new UserRequest();

	const followedCMT = useAxios();
	const moddedCMT = useAxios();

	const location = useLocation();
	const navigate = useNavigate();
	const { useCloseEsc } = useUtils();

	useCloseEsc(setUserPanel);
	useCloseEsc(setSearchModal);

	const timerModal = () => {
		setTimeout(() => setNavList(false), 1500);
	};

	React.useEffect(() => {
		const { url, headers } = ur.GET_FOLLOWED_COMMUNITIES();

		followedCMT.get(url, { headers });
	}, []);

	React.useEffect(() => {
		const { url, headers } = ur.GET_MODDED_COMMUNITIES();

		moddedCMT.get(url, { headers });
	}, []);

	React.useEffect(() => {
		if (login) getProfile();
	}, [login]);

	if (loading) return <p>Loading...</p>;

	return (
		<>
			<div className={location.pathname === '/login' ? 'displayNone' : 'hdr-ctr'}>
				<div onClick={() => navigate('/')} className="hrd-logo-ctr">
					{mediumScreen && <Icon.List onClick={() => setLeftBar(!leftBar)} />}
					<div className="hdr-siteIcons">
						<SiteIcon />
						{!mediumScreen && <img className="logo-banner" src={blackBanner} alt="site banner" />}
					</div>
				</div>

				{!mediumScreen && (
					<button
						onClick={() => setNavList(true)}
						onFocus={timerModal}
						className={login ? 'hdr-userList' : 'displayNone'}
					>
						<div className="hdr-ul-ctr">
							<Icon.House weight="fill" />
							<p>Página inicial</p>
						</div>

						<Icon.CaretDown />

						{navList && <HdrNavList moddedCMT={moddedCMT} followedCMT={followedCMT} />}
					</button>
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
								<Icon.MagnifyingGlass />
								<input />
							</div>
							{login ? (
								<div onClick={() => setUserPanel(!userPanel)} className="mbl-pfl-pic">
									{/* esse h1 embaixo é a foto de perfil */}
									<h1 />
								</div>
							) : (
								<Link to={'/login'}>
									<Icon.SignIn />
								</Link>
							)}
						</div>
					</>
				)}
			</div>

			{userPanel && <UserPanel />}
		</>
	);
};

export default Header;
