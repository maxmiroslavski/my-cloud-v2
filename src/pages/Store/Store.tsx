import { Main } from './Main/Main';
import { Sidebar } from './Sidebar/Sidebar';

import s from './Store.module.css';
import { ErrorWindow } from '../../components/ErrorWindow/ErrorWindow';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AnimatePresence } from 'framer-motion';
import { LoadingWindow } from '../../components/LoadingWindow/LoadingWindow';

export const Store = () => {
	const errorMessage = useAppSelector((state) => state.ui.errorMessage);
	const loadingMessage = useAppSelector((state) => state.ui.loadingMessage);

	return (
		<div className={s.wrapper}>
			<Sidebar />
			<Main />
			<AnimatePresence>{errorMessage && <ErrorWindow />}</AnimatePresence>
			<AnimatePresence>
				{loadingMessage && <LoadingWindow />}
			</AnimatePresence>
		</div>
	);
};
