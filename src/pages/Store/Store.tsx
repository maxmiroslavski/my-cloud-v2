import { Main } from './Main/Main';
import { Sidebar } from './Sidebar/Sidebar';

import s from './Store.module.css';
import { ErrorWindow } from '../../components/ErrorWindow/ErrorWindow';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AnimatePresence } from 'framer-motion';
import { LoadingWindow } from '../../components/LoadingWindow/LoadingWindow';

export const Store = () => {
	const showErrorWindow = useAppSelector((state) => state.ui.showErrorWindow);
	const showLoadingWindow = useAppSelector(
		(state) => state.ui.showLoadingWindow
	);

	return (
		<div className={s.wrapper}>
			<Sidebar />
			<Main />
			<AnimatePresence>
				{showErrorWindow && <ErrorWindow />}
			</AnimatePresence>
			<AnimatePresence>
				{showLoadingWindow && <LoadingWindow />}
			</AnimatePresence>
		</div>
	);
};
