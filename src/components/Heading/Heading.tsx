import { IHeading } from './Heading.interface';
import s from './Heading.module.css';
import cn from 'classnames';

export const Heading = ({
	children,
	fontSize = '38px',
	className,
	...props
}: IHeading) => {
	return (
		<h1
			className={cn(
				className,
				fontSize === '38px' && s.h38px,
				fontSize === '32px' && s.h32px,
				fontSize === '24px' && s.h24px,
				fontSize === '20px' && s.h20px
			)}
			{...props}
		>
			{children}
		</h1>
	);
};
