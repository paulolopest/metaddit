import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from '@phosphor-icons/react';

import { UserContext } from '../../../../Contexts/UserContext';
import { GlobalContext } from '../../../../Contexts/GlobalContext';

const UserPanel = () => {
	const { userLogout } = React.useContext(UserContext);
	const { setAddCmtModal } = React.useContext(GlobalContext);

	return (
		<div className="user-pnl-ctr animeDown">
			<div className="user-pnl-config">
				<div className="upc-hdr">
					<Icon.User />
					<p>As minhas coisas</p>
				</div>

				<div className="upc-list">
					<Link to={'/profile'}>Perfil</Link>

					<Link to={'/settings'}>Configurações</Link>

					<a>Modo escuro</a>
				</div>
			</div>

			<div className="user-pnl-extras">
				<div onClick={() => setAddCmtModal(true)}>
					<Icon.Plus />
					<p>Criar uma comunidade</p>
				</div>
				<div>
					<Icon.Question />
					<p>Centro de ajuda</p>
				</div>
				<div>
					<Icon.Info />
					<p>Termos e Políticas</p>
				</div>
			</div>

			<div onClick={userLogout} className="up-exit">
				<Icon.SignOut />
				<p>Terminar sessão</p>
			</div>
		</div>
	);
};

export default UserPanel;
