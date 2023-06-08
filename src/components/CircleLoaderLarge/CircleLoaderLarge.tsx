import { motion } from 'framer-motion';
import { ICircleLoaderLarge } from './CircleLoaderLarge.interface';
import cs from 'classnames';

export const CircleLoaderLarge = ({
	className,
	...props
}: ICircleLoaderLarge) => {
	return (
		<div className={`${className} absolute w-[75px] h-[75px]`} {...props}>
			<motion.span
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
				className="block w-[75px] h-[75px] border-[0.5em] border-LightGray border-t-[0.5em] border-t-Primary rounded-full absolute top-0 left-0"
			></motion.span>
		</div>
	);
};
