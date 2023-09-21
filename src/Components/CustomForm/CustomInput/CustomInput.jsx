import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ placeholder }) => {
	return (
		<div className="customInput">
			<input />
			<label>{placeholder}</label>
		</div>
	);
};

export default CustomInput;
