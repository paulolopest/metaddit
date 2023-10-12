import React from 'react';
import RouterConfig from './Router/RouterConfig';
import Login from './Pages/Login/Login';
import UserStorage from './Contexts/UserContext';
import Home from './Pages/Home/Home';

const App = () => {
	return (
		<div className="App">
			<RouterConfig />
		</div>
	);
};

export default App;
