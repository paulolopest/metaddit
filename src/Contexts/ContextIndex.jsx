import React from 'react';
import UserStorage from './UserContext';
import GlobalStorage from './GlobalContext';

export const IndexContext = React.createContext('');

const IndexStorage = ({ children }) => {
	return (
		<IndexContext.Provider value={{}}>
			<UserStorage>
				<GlobalStorage>{children}</GlobalStorage>
			</UserStorage>
		</IndexContext.Provider>
	);
};

export default IndexStorage;
