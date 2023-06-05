import { ISpan } from './Span.interface';
import s from './Span.module.css';
import cn from 'classnames';

export const Span = ({ children, fontSize, className, ...props }: ISpan) => {
	return (
		<span
			className={cn(
				className,
				s.span,
				fontSize === '25px' && s.s25px,
				fontSize === '18px' && s.s18px,
				fontSize === '16px' && s.s16px
			)}
			{...props}
		>
			{children}
		</span>
	);
};
