import React, { useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.bubble.css';

const CustomTextArea = () => {
	const [text, setText] = React.useState('');

	const handleChange = (value) => {
		setText(value);
	};

	return (
		<ReactQuill
			value={text}
			onFocus={(e) => console.log(e)}
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
	);
};

export default CustomTextArea;
