import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IParagraph
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	errorMessage: string;
}
