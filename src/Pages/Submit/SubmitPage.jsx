import React from 'react';
import * as Icon from '@phosphor-icons/react';
import RedditStick from '../../Assets/icons/RedditStick';
import { UserRequest } from '../../Requests/UserRequest';
import useAxios from './../../Hooks/useAxios';
import { GlobalContext } from './../../Contexts/GlobalContext';
import 'react-quill/dist/quill.snow.css';
import SubmitForm from './components/SubmitForm';

const UR = new UserRequest();

const SubmitPage = () => {
	const [cmt, setCmt] = React.useState(null);
	const [text, setText] = React.useState('');
	const [title, setTitle] = React.useState('');
	const [communityList, setCommunityList] = React.useState(false);

	const { setAddCmtModal } = React.useContext(GlobalContext);
	const flwdCmt = useAxios();

	React.useEffect(() => {
		const { url, headers } = UR.GET_FOLLOWED_COMMUNITIES();

		flwdCmt.get(url, { headers });
	}, []);

	const flwdCommunities = flwdCmt?.data?.map((cmt) => (
		<div onClick={() => setCmt(cmt)} className="flwd-cmt-mdl-card">
			<span />
			<div>
				<p>{cmt.name}</p>
				<span>{cmt._count.User_Community_Follow} Membros</span>
			</div>
		</div>
	));

	return (
		<div className="submit-page">
			<div className="sbt-ctr">
				<div className="sbt-sct">
					<div className="sbt-sct-hdr">
						<p>Postar</p>
					</div>

					<div className="sbt-sct-main">
						<div onClick={() => setCommunityList(!communityList)} className="sbt-sct-main-hdr">
							<button>
								<>
									<div style={cmt && { color: 'black', fontWeight: `500` }}>
										<Icon.CircleDashed />
										{cmt ? `m/${cmt.name}` : 'Escolha uma comunidade'}
									</div>{' '}
									<Icon.CaretDown />
								</>

								{communityList && (
									<div className="flwd-cmt-modal">
										<div className="flwd-cmt-mdl-hdr">
											<p>Suas comunidades</p>

											<div onClick={() => setAddCmtModal(true)}>Criar nova</div>
										</div>
										{flwdCommunities}
									</div>
								)}
							</button>
						</div>

						<div className="sbt-sct-ipt">
							<div className="sbt-sct-ipt-hdr">
								<div>
									<Icon.Article />
									Postar
								</div>

								<div>
									<Icon.Image />
									Imagens
								</div>
							</div>

							<div className="sbt-sct-ipt-main">
								<SubmitForm title={title} setTitle={setTitle} text={text} setText={setText} />

								<div className="sbt-post">
									<button>Postar</button>
								</div>
							</div>

							<div className="sbt-sct-ipt-ftr">
								<input type="checkbox" />
								<p>Receber notificações de respostas deste post</p>
							</div>
						</div>
					</div>
				</div>

				<div className="sbt-sct-warn">
					<div className="warn-hdr">
						<RedditStick />

						<p>Ao postar no Metaddit!</p>
					</div>

					<div>
						<div>1. Coloque-se no lugar do próximo</div>
						<div>2. Comporte-se como te comportarias na vida real</div>
						<div>3. Procure a fonte original do conteúdo</div>
						<div>4. Procura por posts duplicados antes</div>
						<div>5. Leia as regras da comunidade</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubmitPage;
