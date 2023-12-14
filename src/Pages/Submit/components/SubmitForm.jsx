import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as Icon from '@phosphor-icons/react';

const SubmitForm = (title, setTitle, text, setText) => {
	const handleChange = (value) => {
		setText(value);
	};

	return (
		<div className="sbt-sct-ipt-main-ipts">
			<input placeholder="Título" />

			<div className="textArea-ctr">
				<ReactQuill
					value={text}
					onChange={handleChange}
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
				<button>
					<Icon.Plus />
					Spoiler
				</button>
				<button>
					<Icon.Plus />
					Conteúdo impróprio
				</button>
				<button>
					<>
						<Icon.Tag />
						Flair
					</>

					<Icon.CaretDown style={{ marginLeft: '.3rem' }} />
				</button>
			</div>
		</div>
	);
};

export default SubmitForm;
