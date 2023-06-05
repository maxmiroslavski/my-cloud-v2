import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IHeading
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	children: ReactNode;
	fontSize?: '38px' | '32px' | '24px' | '20px';
}
