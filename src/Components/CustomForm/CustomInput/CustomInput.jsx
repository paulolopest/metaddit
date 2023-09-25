import React from 'react';
import './CustomInput.scss';

const CustomInput = ({ placeholder, register, name, required, minLength, pattern, type, errors, watch }) => {
	return (
		<div className="customInput">
			<div>
				<input type={type} {...register(name, { required, pattern, minLength })} />
				<label id={watch && watch.length !== 0 && 'labelToTop'}>{placeholder}</label>
			</div>
			<span>{errors}</span>
		</div>
	);
};

export default CustomInput;
