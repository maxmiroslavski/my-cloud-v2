import { DetailedHTMLProps } from 'react';

export interface EyeButtonProps
	extends DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	showPassword: boolean;
}
