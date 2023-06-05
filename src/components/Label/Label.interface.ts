import { DetailedHTMLProps, LabelHTMLAttributes, ReactNode } from 'react';

export interface ILabel
	extends DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	> {
	children: ReactNode;
}
