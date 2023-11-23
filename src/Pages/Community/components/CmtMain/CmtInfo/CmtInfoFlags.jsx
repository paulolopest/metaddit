import React from 'react';

const CmtInfoFlags = ({ community }) => {
	const flagMap = community?.data?.flags.map((flag) => (
		<p style={{ backgroundColor: flag.color }} key={flag.flag}>
			{flag.flag}
		</p>
	));
	return (
		<div className="cmt-if-flags">
			<p>Filtrar por flag</p>

			<div>{flagMap}</div>
		</div>
	);
};

export default CmtInfoFlags;
