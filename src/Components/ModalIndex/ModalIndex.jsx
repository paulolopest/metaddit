import React from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import LoginModal from './../../Pages/Login/LoginModal/LoginModal';
import AddCmtModal from './../Header/components/AddCmtModal/AddCmtModal';
import useUtils from '../../Hooks/useUtils';
import HdrLeftBar from './../Header/components/HdrLeftBar/HdrLeftBar';

const ModalIndex = () => {
	const { loginModal, addCmtModal, leftBar } = React.useContext(GlobalContext);

	const { useFreezeScreen } = useUtils();

	useFreezeScreen(loginModal);
	useFreezeScreen(addCmtModal);
	useFreezeScreen(leftBar);

	return (
		<>
			{loginModal && <LoginModal />}
			{addCmtModal && <AddCmtModal />}
			{leftBar && <HdrLeftBar />}
		</>
	);
};

export default ModalIndex;
