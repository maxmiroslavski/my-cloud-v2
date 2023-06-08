import { ProfileWindow } from './ProfileWindow/ProfileWindow';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { toggleProfileWindow } from '../../../store/uiSlice';
import { AnimatePresence } from 'framer-motion';

import { Files } from './Files/Files';

export const Main = () => {
	const dispatch = useAppDispatch();
	const showWindow = useAppSelector((state) => state.ui.showProfileWindow);

	return (
		<div className="relative">
			<div className="h-[80px] bg-White flex items-center flex-row-reverse px-[20px]">
				<button
					onClick={() => dispatch(toggleProfileWindow())}
					className="profileButton hover:bg-PrimaryHover"
				>
					M
				</button>
			</div>
			<AnimatePresence>{showWindow && <ProfileWindow />}</AnimatePresence>
			<AnimatePresence></AnimatePresence>

			<Files />
		</div>
	);
};
