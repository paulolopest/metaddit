import React from 'react';
import './AddCmtModal.scss';
import * as Icon from '@phosphor-icons/react';
import useAxios from '../../../../Hooks/useAxios';
import useUtils from '../../../../Hooks/useUtils';
import { GlobalContext } from '../../../../Contexts/GlobalContext';
import { CommunityRequest } from '../../../../Requests/CommunityRequest';

const AddCmtModal = () => {
	const [cmtType, setCmtType] = React.useState('Public');
	const [nsfw, setNsfw] = React.useState(false);
	const [cmtName, setCmtName] = React.useState('');

	const communityRequest = new CommunityRequest();

	const { post } = useAxios();
	const { closeModal, useCloseEsc } = useUtils();
	const { addCmtModal, setAddCmtModal } = React.useContext(GlobalContext);

	const onChangeCheckbox = ({ target }) => {
		setCmtType(target.value);
	};

	const onChangeNsfw = ({ target }) => {
		if (target.checked === true) {
			setNsfw(true);
		} else {
			setNsfw(false);
		}
	};

	const onChangeName = ({ target }) => {
		setCmtName(target.value);
	};

	const onClickCreateCmt = async () => {
		const { url, headers } = communityRequest.CREATE_COMMUNITY();

		console.log(headers);

		const body = {
			name: cmtName,
			communityPrivacy: cmtType,
			nsfw: nsfw,
		};

		await post(url, body, { headers });
	};

	useCloseEsc(setAddCmtModal);

	return (
		<div
			onClick={(e) => {
				closeModal(e, addCmtModal, setAddCmtModal);
			}}
			className="acm-backScreen "
		>
			<div className="acm-modal animeFadeIn">
				<div className="cm-hdr">
					<p>Criar uma comunidade</p>

					<Icon.X onClick={() => setAddCmtModal(false)} weight="bold" size={'22px'} />
				</div>
				<div className="cm-name">
					<div>
						<p>Nome</p>
						<span>
							Nomes de comunidade não podem ser alterados, incluindo o seu uso de letras maiúsculas.
						</span>
					</div>
					<input value={cmtName} onChange={onChangeName} />
					<span>21 caracteres restantes</span>
				</div>
				<div className="cm-cType">
					<p>Tipo de comunidade</p>
					<div>
						<input
							onChange={onChangeCheckbox}
							value={'Public'}
							type="checkbox"
							checked={cmtType === 'Public'}
						/>
						<Icon.User weight="fill" color="#a1a1a1" />
						<p>Pública</p>
						<span>Qualquer um pode ver, postar e comentar nesta comunidade</span>
					</div>
					<div>
						<input
							onChange={onChangeCheckbox}
							value={'Private'}
							type="checkbox"
							checked={cmtType === 'Private'}
						/>
						<Icon.LockSimple weight="fill" color="#a1a1a1" />
						<p>Privado</p>
						<span>Apenas usuários aprovados podem ver e postar nesta comunidade</span>
					</div>
				</div>
				<div className="cm-nsfw">
					<p>Conteúdo adulto</p>
					<div>
						<input onChange={onChangeNsfw} checked={nsfw} type="checkbox" />
						<span>NSFW</span>
						<p>Comunidade para maiores de 18 anos</p>
					</div>
				</div>
				<div className="cm-footer">
					<button onClick={() => setAddCmtModal(false)}>Cancelar</button>
					<button onClick={onClickCreateCmt}>Criar comunidade</button>
				</div>
			</div>
		</div>
	);
};

export default AddCmtModal;
