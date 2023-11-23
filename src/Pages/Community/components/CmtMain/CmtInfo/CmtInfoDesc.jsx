import React from 'react';
import { Link } from 'react-router-dom';
import * as Icon from '@phosphor-icons/react';

const CmtInfoDesc = ({ isMod, community }) => {
	return (
		<div className="cmt-if-desc">
			<div className="cmt-if-dsc-hdr">
				<p>Sobre a comunidade</p>

				{isMod && (
					<div>
						<Icon.Shield />
						<Link to={'/'}>Moderação</Link>
					</div>
				)}
			</div>

			<div className="cmt-if-dsc-main">
				<div className="dsc-main-bio">
					{community?.data?.bio && <p>{community?.data?.bio}</p>}

					{isMod && <Icon.PencilSimple />}
				</div>

				<div className="dsc-main-ctd_at">
					<Icon.Cake />
					<p>Criado em</p>
					<p>{community?.data?.created_at.slice(0, 10).replaceAll('-', '/')}</p>
				</div>
			</div>

			<div className="cmt-if-dsc-adt-if">
				<div>
					<span> {community?.data?._count.User_Community_Follow}</span>
					<p>Membros</p>
				</div>

				<div>
					<span> {community?.data?._count.Post}</span>
					<p>Posts</p>
				</div>

				<div />
			</div>

			<div className="cmt-if-dsc-add-pst">
				<button>Criar Post</button>
			</div>

			<div className="cmt-if-dsc-ftr">
				<div>
					<Icon.EyeSlash />
					<p>Tema da comunidade</p>
				</div>

				<div className="onOff"></div>
			</div>
		</div>
	);
};

export default CmtInfoDesc;
