import React from 'react';
import './HdrLeftBar.scss';
import { Link } from 'react-router-dom';
import TvIcon from '../../../Assets/icons/TvIcon';
import Chevron from '../../../Assets/icons/Chevron';
import DogIcon from '../../../Assets/icons/DogIcon';
import GamesIcon from '../../../Assets/icons/GamesIcon';
import SportIcon from '../../../Assets/icons/SportIcon';
import StarIcon from './../../../Assets/icons/StarIcon';
import StockIcon from './../../../Assets/icons/StockIcon';
import PopularIcon from '../../../Assets/icons/PopularIcon';

const HdrLeftBar = ({ onClickOutside }) => {
	const [chevronRotate, setChevronRotate] = React.useState(90);
	const [subjectSection, setSubjectSection] = React.useState(true);

	return (
		<div onClick={onClickOutside} className="hdr-lftbar-ctr">
			<div className="hdr-left-bar animeRight">
				<div className="lftbr-recent">
					<PopularIcon />
					<Link>Popular</Link>
				</div>

				<div className="subject-ctr">
					<div className="sbj-hdr" onClick={() => setSubjectSection(!subjectSection)}>
						<p>Assuntos</p>
						<Chevron rotate={subjectSection ? 90 : 270} />
					</div>

					{/* 
					get de topicos da api 
					
					quando for fazer o map, faz a logica do rotate dentro do map?
					*/}

					{subjectSection && (
						<div className="lft-br-topics animeDown">
							<div>
								<div className="tpcCard">
									<GamesIcon />
									Jogos
								</div>

								<Chevron rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<StockIcon />
									Negócios
								</div>

								<Chevron rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<DogIcon />
									Animais
								</div>

								<Chevron rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<SportIcon />
									Esportes
								</div>

								<Chevron rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<TvIcon />
									Televisão
								</div>

								<Chevron rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<StarIcon />
									Celebridades
								</div>

								<Chevron rotate={chevronRotate} />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HdrLeftBar;
