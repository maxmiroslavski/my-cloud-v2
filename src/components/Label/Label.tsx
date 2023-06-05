import { ILabel } from './Label.interface';
import s from './Label.module.css';

export const Label = ({ children }: ILabel) => {
	return <label className={s.label}>{children}</label>;
};
