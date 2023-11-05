import React from 'react';
import './HdrNavList.scss';
import * as Icon from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const HdrNavList = ({ moddedCMT, followedCMT }) => {
	const followedList = followedCMT?.data?.map((community) => (
		<div key={community.id}>
			{community.profile_img ? <img src={community.profile_img} alt="" /> : <span>m/</span>}
			<Link to={`/m/${community.name}`}>{community.name}</Link>
		</div>
	));

	const moddedList = moddedCMT?.data?.map((community) => (
		<div key={community.id}>
			{community.profile_img ? <img src={community.profile_img} alt="" /> : <span>m/</span>}
			<Link to={`/m/${community.name}`}>{community.name}</Link>{' '}
		</div>
	));

	return (
		<div className="hdr-nav-list animeDown">
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
