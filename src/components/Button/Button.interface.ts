import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButton
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	btnSize: 'small' | 'large';
	children: ReactNode;
}
