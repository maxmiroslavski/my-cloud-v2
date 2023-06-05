import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ISpan
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	children: ReactNode;
	fontSize: '25px' | '18px' | '16px';
}
