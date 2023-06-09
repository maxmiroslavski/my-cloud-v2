import s from './CircleLoader.module.css';
import { motion } from 'framer-motion';
import { ICircleLoader } from './CircleLoader.interface';

export const CircleLoader = ({ className, ...props }: ICircleLoader) => {
	return (
		<div className={`${className} ${s.container}`} {...props}>
			<motion.span
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
				className={s.circle}
			></motion.span>
		</div>
	);
};
