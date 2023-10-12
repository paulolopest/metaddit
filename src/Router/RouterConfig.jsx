import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './../Components/Header/Header';
import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import UserStorage from '../Contexts/UserContext';

const RouterConfig = () => {
	return (
		<BrowserRouter>
			<UserStorage>
				<Header />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login/*" element={<Login />} />
				</Routes>
			</UserStorage>
		</BrowserRouter>
	);
};

export default RouterConfig;
