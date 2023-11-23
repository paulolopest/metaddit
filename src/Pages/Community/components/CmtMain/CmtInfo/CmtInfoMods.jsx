import React from 'react';
import { Link } from 'react-router-dom';

const CmtInfoMods = ({ community }) => {
	const modMap = community?.data?.Community_Mods.map((mod) => (
		<Link to={`/u/${mod.user_name}`}>u/{mod.user_name}</Link>
	));

	return (
		<div className="cmt-if-mods">
			<p>Moderadores</p>

			<div className="cmt-if-mods-ctr">{modMap}</div>

			<span>Ver todos os moderadores</span>
		</div>
	);
};

export default CmtInfoMods;
