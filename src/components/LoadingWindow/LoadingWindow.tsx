import { motion } from 'framer-motion';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { showError } from '../../store/uiSlice';
import { useEffect } from 'react';
import { CircleLoader } from '../CircleLoader/CircleLoader';

export const LoadingWindow = () => {
	const dispatch = useAppDispatch();
	const statusMessage = useAppSelector((state) => state.ui.loadingMessage);

	useEffect(() => {
		setTimeout(() => {
			dispatch(showError(false));
		}, 4000);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="bg-Whie border-[2px] border-Primary w-[325px] rounded-l-[10px] h-[75px] flex items-center gap-[30px] py-[15px] px-[20px] fixed bottom-[50px] right-0"
		>
			<h1 className="font-normal text-[22px] leading-[26px] text-Primary">
				{statusMessage === '' ? 'Загрузка Файлов' : statusMessage}
			</h1>
			<CircleLoader />
		</motion.div>
	);
};
