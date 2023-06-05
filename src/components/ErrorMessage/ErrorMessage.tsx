import { IParagraph } from './ErrorMessage.interface';
import s from './ErrorMessage.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const ErrorMessage = ({ errorMessage, className }: IParagraph) => {
	return (
		<motion.p className={cn(s.error, className)}>{errorMessage}</motion.p>
	);
};
