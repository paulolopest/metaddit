import React from 'react';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Header from '../Components/Header/Header';
import UserStorage from '../Contexts/UserContext';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import NotFoundPage from '../Pages/NotFound/NotFoundPage';

const RouterConfig = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <NotFoundPage />,
		},
		{
			path: '/login',
			element: <Login />,
		},
	]);

	return <RouterProvider router={router} />;
};

export default RouterConfig;
