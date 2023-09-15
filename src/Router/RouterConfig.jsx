import React from 'react';
import App from '../App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Home from '../Pages/Home/Home';

const RouterConfig = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterConfig;
