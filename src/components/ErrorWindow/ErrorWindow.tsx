import { motion } from 'framer-motion';
import closeIcon from '../../assets/closeErrorIcon.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getErrorMessage } from '../../store/uiSlice';
import { useEffect } from 'react';

export const ErrorWindow = () => {
	const dispatch = useAppDispatch();
	const errorMessage = useAppSelector((state) => state.ui.errorMessage);

	useEffect(() => {
		setTimeout(() => {
			dispatch(getErrorMessage(''));
		}, 4000);
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="bg-LightRed border-[2px] border-Red w-[500px] rounded-l-[10px] h-[75px] flex flex-col justify-center py-[10px] px-[20px] fixed bottom-[50px] right-0"
		>
			<h1 className="font-normal text-[22px] leading-[26px] text-Red">
				Ошибка!
			</h1>
			<p className="text-Red font-light text-[16px] leading-[19px]">
				{errorMessage}
			</p>
			<button
				onClick={() => dispatch(getErrorMessage(''))}
				className="pointer border-none bg-none outline-none absolute top-[15px] right-[15px]"
			>
				<img src={closeIcon} alt="close-icon" />
			</button>
		</motion.div>
	);
};
