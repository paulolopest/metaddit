import React from 'react';
import './HdrLeftBar.scss';
import { Link } from 'react-router-dom';
import * as Icon from '@phosphor-icons/react';
import useUtils from '../../../../Hooks/useUtils';
import { GlobalContext } from '../../../../Contexts/GlobalContext';

const HdrLeftBar = () => {
	const [chevronRotate, setChevronRotate] = React.useState(90);
	const [subjectSection, setSubjectSection] = React.useState(true);

	const { leftBar, setLeftBar } = React.useContext(GlobalContext);

	const { closeModal, useCloseEsc } = useUtils();

	useCloseEsc(setLeftBar);

	return (
		<div onClick={(e) => closeModal(e, leftBar, setLeftBar)} className="hdr-lftbar-ctr">
			<div className="hdr-left-bar animeRight">
				<div className="lftbr-recent">
					<Icon.TrendUp />
					<Link>Popular</Link>
				</div>

				<div className="subject-ctr">
					<div className="sbj-hdr" onClick={() => setSubjectSection(!subjectSection)}>
						<p>Assuntos</p>
						<Icon.CaretDown rotate={subjectSection ? 90 : 270} />
					</div>

					{/* 
					get de topicos da api 
					
					quando for fazer o map, faz a logica do rotate dentro do map?
					*/}

					{subjectSection && (
						<div className="lft-br-topics animeDown">
							<div>
								<div className="tpcCard">
									<Icon.GameController />
									Jogos
								</div>

								<Icon.CaretDown rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<Icon.ChartLine />
									Negócios
								</div>

								<Icon.CaretDown rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<Icon.Dog />
									Animais
								</div>

								<Icon.CaretDown rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<Icon.DribbbleLogo />
									Esportes
								</div>

								<Icon.CaretDown rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<Icon.Monitor />
									Televisão
								</div>

								<Icon.CaretDown rotate={chevronRotate} />
							</div>
							<div>
								<div className="tpcCard">
									<Icon.Sparkle />
									Celebridades
								</div>

								<Icon.CaretDown rotate={chevronRotate} />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HdrLeftBar;
