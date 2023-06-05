import { IParagraph } from './ErrorMessage.interface';
import s from './ErrorMessage.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const ErrorMessage = ({ errorMessage, className }: IParagraph) => {
	return (
		<motion.p
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.2 }}
			className={cn(s.error, className)}
		>
			{errorMessage}
		</motion.p>
	);
};
