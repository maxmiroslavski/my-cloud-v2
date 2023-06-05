import { IParagraph } from './Paragraph.interface';
import s from './Paragraph.module.css';
import cn from 'classnames';

const Paragraph = ({ fontSize, children, className, ...props }: IParagraph) => {
	return (
		<p
			className={cn(
				s.paragraph,
				className,
				fontSize === '16px' && s.medium,
				fontSize === '14px' && s.small
			)}
			{...props}
		>
			Paragraph
		</p>
	);
};

export default Paragraph;
