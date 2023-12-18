import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as Icon from '@phosphor-icons/react';
import useAxios from '../../../Hooks/useAxios';
import { PostRequest } from '../../../Requests/PostRequest';

const PR = new PostRequest();

const SubmitForm = ({ cmt }) => {
	const [text, setText] = React.useState('');
	const [title, setTitle] = React.useState('');
	const [nsfw, setNSFW] = React.useState(false);
	const [spoiler, setSpoiler] = React.useState(false);
	const [flagModal, setFlagModal] = React.useState(false);
	const [flag, setFlag] = React.useState({ name: null, color: null });

	const { post } = useAxios();

	const textChange = (value) => {
		setText(value);
	};
	const titleChange = ({ target }) => {
		setTitle(target.value);
	};

	const cmtFlag = cmt?.flags?.map((flag, index) => (
		<div
			key={index}
			onClick={() => {
				setFlag({ name: flag.flag, color: flag.color });
			}}
		>
			<Icon.Tag />
			<p style={{ padding: '.2rem', backgroundColor: flag.color }}>{flag.flag}</p>
		</div>
	));

	const sendForm = () => {
		const communityId = cmt?.id;
		const { url, headers } = PR.ADD_POST(cmt?.id);

		const body = {
			title: title,
			description: text,
			img: null,
			spoiler: spoiler,
			flag: { name: flag.name, color: flag.color },
			nsfw: nsfw,
		};

		post(url, body, { headers });
	};

	return (
		<div className="sbt-sct-ipt-main">
			<div className="sbt-sct-ipt-main-ipts">
				<input placeholder="Título" onChange={titleChange} value={title} />

				<div className="textArea-ctr">
					<ReactQuill
						value={text}
						onChange={textChange}
						placeholder="Texto (opcional)"
						modules={{
							toolbar: [
								['bold', 'italic'],
								['underline', 'strike'],
								['blockquote', 'code-block'],
								[{ header: 1 }, { header: 2 }],
								['clean'],
							],
						}}
					/>
				</div>

				<div className="sbt-pst-opts">
					<button onClick={() => setSpoiler(!spoiler)}>
						<Icon.Plus />
						Spoiler
					</button>
					<button onClick={() => setNSFW(!nsfw)}>
						<Icon.Plus />
						Conteúdo impróprio
					</button>
					<button disabled={cmt ? false : true} onClick={() => setFlagModal(!flagModal)}>
						{!flag.name ? (
							<>
								<div className="dfac">
									<Icon.Tag />
									Flag
								</div>

								<Icon.CaretDown style={{ marginLeft: '.3rem' }} />

								{flagModal && <div className="sbt-flag-mdl animeFadeIn">{cmtFlag}</div>}
							</>
						) : (
							`${flag.name}`
						)}
					</button>
				</div>
			</div>

			<div className="sbt-post">
				<button onClick={sendForm}>Postar</button>
			</div>
		</div>
	);
};

export default SubmitForm;
