import React from 'react';
import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import Header from './../Components/Header/Header';
import IndexStorage from '../Contexts/ContextIndex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModalIndex from './../Components/ModalIndex/ModalIndex';
import Community from './../Pages/Community/Community';

const RouterConfig = () => {
	return (
		<BrowserRouter>
			<IndexStorage>
				<Header />
				<ModalIndex />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/m/*" element={<Community />} />
					<Route path="/login/*" element={<Login />} />
				</Routes>
			</IndexStorage>
		</BrowserRouter>
	);
};

export default RouterConfig;
