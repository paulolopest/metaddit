import React from 'react';
import { UserContext } from '../../Contexts/UserContext';

const Home = () => {
	const { id } = React.useContext(UserContext);

	console.log(id);
	return <div>Home</div>;
};

export default Home;
