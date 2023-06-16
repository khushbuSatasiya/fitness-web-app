import { useEffect } from 'react';

const useBodyOverflow = (isOpenComposer: boolean, isTutorial?: boolean, isExpandable?: boolean) => {
	useEffect(() => {
		if (isOpenComposer || isTutorial || isExpandable) {
			document.getElementsByTagName('body')[0].classList.add('overflow--hidden');
		} else {
			document.getElementsByTagName('body')[0].classList.remove('overflow--hidden');
		}
	}, [isOpenComposer, isTutorial, isExpandable]);
};

export default useBodyOverflow;
