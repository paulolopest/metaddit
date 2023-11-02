import React from 'react';
import './HdrNavList.scss';

const HdrNavList = () => {
	return (
		<div className="hdr-nav-list">
			<div className="hdr-nl-modCmt">
				<span>Moderação</span>
				<div>
					{/* Map de comunidades que sou mod */}
					<div>
						<p>Icon</p>
						<p>Nome da comunidade</p>
					</div>
				</div>
			</div>

			<div className="hdr-nl-myCmt">
				<span>Minhas comunidades</span>

				<div>
					{/* Map de comunidades que sigo */}
					<div>
						<p>Icon</p>
						<p>Nome da comunidade</p>
					</div>
					<div>
						<p>Icon</p>
						<p>Nome da comunidade</p>
					</div>
					<div>
						<p>Icon</p>
						<p>Nome da comunidade</p>
					</div>
					<div>
						<p>Icon</p>
						<p>Nome da comunidade</p>
					</div>
					<div>
						<p>Icon</p>
						<p>Nome da comunidade</p>
					</div>
				</div>
			</div>

			<div className="hdr-nl-others">
				<span>Feeds</span>

				<div>
					<div>
						<p>Icon</p>
						<p>Pagina inicial</p>
					</div>
					<div>
						<p>Icon</p>
						<p>Todos</p>
					</div>
					<div>
						<p>Icon</p>
						<p>Popular</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HdrNavList;
