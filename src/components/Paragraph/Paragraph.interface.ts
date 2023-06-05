import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IParagraph
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	fontSize?: '16px' | '14px';
	isError?: boolean;
}
