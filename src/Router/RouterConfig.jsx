import React from 'react';
import App from '../App';
import Home from '../Pages/Home/Home';
import Header from '../Components/Header/Header';
import UserStorage from '../Contexts/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouterConfig = () => {
	return (
		<BrowserRouter>
			<UserStorage>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</UserStorage>
		</BrowserRouter>
	);
};

export default RouterConfig;
