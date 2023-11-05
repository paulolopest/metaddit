import React from 'react';
import './HdrNavList.scss';
import { Link } from 'react-router-dom';
import * as Icon from '@phosphor-icons/react';

const HdrNavList = ({ moddedCMT, followedCMT, setNavList }) => {
	const followedList = followedCMT?.data?.map((community) => (
		<Link to={`/m/${community.name}`} key={community.id}>
			{community.profile_img ? <img src={community.profile_img} alt="" /> : <span>m/</span>}
			<p>{community.name}</p>
		</Link>
	));

	const moddedList = moddedCMT?.data?.map((community) => (
		<Link to={`/m/${community.name}`} key={community.id}>
			{community.profile_img ? <img src={community.profile_img} alt="" /> : <span>m/</span>}
			<p>{community.name}</p>
		</Link>
	));

	return (
		<div onBlurCapture={() => setNavList(false)} className="hdr-nav-list animeDown">
			<div className="hdr-nl-list">
				<span>Moderação</span>
				<div>{moddedList}</div>
			</div>

			<div className="hdr-nl-list">
				<span>Minhas comunidades</span>

				<div>{followedList}</div>
			</div>

			<div className="hdr-nl-list">
				<span>Feeds</span>

				<div>
					<div>
						<Icon.House />
						<p>Pagina inicial</p>
					</div>
					<div>
						<Icon.Rows />
						<p>Todos</p>
					</div>
					<div>
						<Icon.TrendUp />
						<p>Popular</p>
					</div>
				</div>
			</div>

			<div className="hdr-nl-list">
				<span>Outras</span>

				<div>
					<div>
						<Icon.User />
						<p>Configurações do usuário</p>
					</div>
					<div>
						<Icon.Plus />
						<p>Criar post</p>
					</div>
					<div>
						<Icon.Chat />
						<p>Mensagens</p>
					</div>
					<div>
						<Icon.Bell />
						<p>Notificações</p>
					</div>
					<div>
						<Icon.GithubLogo />
						<p>Suporte</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HdrNavList;
