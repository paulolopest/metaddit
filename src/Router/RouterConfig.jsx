import React from 'react';
import Home from './../Pages/Home/Home';
import Login from './../Pages/Login/Login';
import Header from './../Components/Header/Header';
import IndexStorage from '../Contexts/ContextIndex';
import SubmitPage from '../Pages/Submit/SubmitPage';
import Community from './../Pages/Community/Community';
import ModalIndex from './../Components/ModalIndex/ModalIndex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouterConfig = () => {
	return (
		<BrowserRouter>
			<IndexStorage>
				<Header />

				<ModalIndex />

				<div className="Index">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/m/*" element={<Community />} />
						<Route path="/login/*" element={<Login />} />
						<Route path="/submit/*" element={<SubmitPage />} />
					</Routes>
				</div>
			</IndexStorage>
		</BrowserRouter>
	);
};

export default RouterConfig;
