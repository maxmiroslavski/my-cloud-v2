import { IParagraph } from './Paragraph.interface';
import s from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
	fontSize = '16px',
	isError = false,
	children,
	className,
	...props
}: IParagraph) => {
	return (
		<p
			className={cn(
				s.paragraph,
				className,
				isError && s.error,
				fontSize === '16px' && s.medium,
				fontSize === '14px' && s.small
			)}
			{...props}
		>
			{children}
		</p>
	);
};
