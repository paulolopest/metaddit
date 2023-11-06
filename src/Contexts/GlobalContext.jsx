import React from 'react';
import useMedia from './../Hooks/useMedia';

export const GlobalContext = React.createContext('');

const GlobalStorage = ({ children }) => {
	const [loginModal, setLoginModal] = React.useState(false);
	const [addCmtModal, setAddCmtModal] = React.useState(false);
	const [leftBar, setLeftBar] = React.useState(false);

	const mediumScreen = useMedia('(max-width: 1050px)');
	const smallScreen = useMedia('(max-width: 800px)');
	const mobileScreen = useMedia('(max-width: 600px)');

	return (
		<GlobalContext.Provider
			value={{
				loginModal,
				setLoginModal,
				addCmtModal,
				setAddCmtModal,
				leftBar,
				setLeftBar,
				mediumScreen,
				smallScreen,
				mobileScreen,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalStorage;
