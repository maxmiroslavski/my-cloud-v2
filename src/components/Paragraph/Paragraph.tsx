import { IParagraph } from './Paragraph.interface';

const Paragraph = ({ children, ...props }: IParagraph) => {
	return <p {...props}>Paragraph</p>;
};

export default Paragraph;
