import { IInput } from './Input.interface';
import s from './Input.module.css';
import cn from 'classnames';

export const Input = ({ isError, ...props }: IInput) => {
	return (
		<input
			className={cn(s.input, isError && s.error)}
			placeholder="Введите имя"
			{...props}
		/>
	);
};
