import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFoundPage = () => {
	const error = useRouteError();
	return (
		<div>
			<p>Num achei, mals ae</p>
			<h1>{error.statusText || error.message}</h1>
		</div>
	);
};

export default NotFoundPage;
