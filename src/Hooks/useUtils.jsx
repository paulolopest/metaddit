import React from 'react';

const useUtils = () => {
	const useFreezeScreen = (state) => {
		React.useEffect(() => {
			if (state) {
				document.body.classList.add('loading');
			} else {
				document.body.classList.remove('loading');
			}

			return () => {
				document.body.classList.remove('loading');
			};
		}, [state]);
	};

	const closeModal = React.useCallback((event, state, setState) => {
		if (state) {
			if (event.target === event.currentTarget) {
				setState(false);
			}
		}
	}, []);

	const useCloseEsc = (setState) => {
		const handleEscPress = (event) => {
			if (event.keyCode === 27) {
				setState(false);
			}
		};

		React.useEffect(() => {
			window.addEventListener('keydown', handleEscPress);

			return () => {
				window.removeEventListener('keyDown', handleEscPress);
			};
		}, []);
	};

	return { useFreezeScreen, closeModal, useCloseEsc };
};

export default useUtils;
