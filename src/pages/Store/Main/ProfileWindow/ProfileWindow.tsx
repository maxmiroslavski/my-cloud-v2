import { Button } from '../../../../components/Button/Button';
import { Heading } from '../../../../components/Heading/Heading';
import { Span } from '../../../../components/Span/Span';

import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { logout } from '../../../../store/authSlice';
import { toggleProfileWindow } from '../../../../store/uiSlice';
import { motion } from 'framer-motion';

export const ProfileWindow = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatch(toggleProfileWindow());
		dispatch(logout());
		navigate('/login');
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="absolute w-[300px] h-[250px] bg-White right-0 p-[20px] z-10"
		>
			<Heading fontSize="24px">Профиль</Heading>

			<div className="flex flex-col items-center">
				<div className="profileButton mt-[10px]">М</div>

				<Heading className="mt-[15px]" fontSize="20px">
					User Name
				</Heading>

				<Span className="text-Gray mt-[5px]" fontSize="16px">
					user@test.ru
				</Span>

				<Button
					className="mt-[10px] py-[5px] px-[25px]"
					btnSize="small"
					onClick={logoutHandler}
				>
					Выйти
				</Button>
			</div>
		</motion.div>
	);
};
