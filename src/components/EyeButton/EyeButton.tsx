import eyeIcon from '../../assets/eyeIcon.svg';
import eyeUnderlineIcon from '../../assets/eyeUnderlineIcon.svg';
import { EyeButtonProps } from './EyeButton.interface';
import { motion, AnimatePresence } from 'framer-motion';

export const EyeButton = ({ showPassword, ...props }: EyeButtonProps) => {
	return (
		<AnimatePresence>
			<div
				className="cursor-pointer absolute w-[25px] h-[25px] pointer bottom-[8px] right-[6px] z-50"
				{...props}
			>
				{!showPassword && (
					<motion.img
						initial={{ rotate: 0 }}
						animate={{ rotate: 180 }}
						exit={{ rotate: 0 }}
						src={eyeIcon}
						alt="eye-icon"
					/>
				)}
				{showPassword && (
					<motion.img
						initial={{ rotate: 0 }}
						animate={{ rotate: 180 }}
						exit={{ rotate: 0 }}
						src={eyeUnderlineIcon}
						alt="eye-icon"
					/>
				)}
			</div>
		</AnimatePresence>
	);
};
