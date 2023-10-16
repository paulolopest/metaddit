import React from 'react';

const Chevron = ({ rotate, className, onClick }) => {
	return (
		<svg
			onClick={onClick}
			className={className}
			fill="#000000"
			height="32px"
			width="32px"
			version="1.1"
			id="XMLID_287_"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			xmlSpace="preserve"
			style={{ transform: `rotate(${rotate}deg)`, transition: '0.5s ease-in-out' }}
		>
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
			<g id="SVGRepo_iconCarrier">
				<g id="next">
					<g>
						<polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon>
					</g>
				</g>
			</g>
		</svg>
	);
};

export default Chevron;
