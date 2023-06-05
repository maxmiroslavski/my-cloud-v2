import { IButton } from './Button.interface';
import s from './Button.module.css';
import cn from 'classnames';

export const Button = ({ children, btnSize, className, ...props }: IButton) => {
	return (
		<button
			className={cn(
				className,
				s.button,
				btnSize === 'large' && s.large,
				btnSize === 'small' && s.small
			)}
			{...props}
		>
			{children}
		</button>
	);
};
