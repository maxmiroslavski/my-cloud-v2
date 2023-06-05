import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Span } from '../../components/Span/Span';

import { IRegistrationFormData } from './Registration.interface';

import { useFetchPost } from '../../hooks/useFetchPost';

import cn from 'classnames';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export const Registration = () => {
	const { fetchData } = useFetchPost();

	const schema: ZodType<IRegistrationFormData> = z.object({
		name: z.string().min(1),
		email: z.string().email(),
		password: z.string().min(10).max(30),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<IRegistrationFormData>({
		resolver: zodResolver(schema),
	});

	const submitFormHandler = (enteredData: IRegistrationFormData) => {
		console.log(enteredData);

		fetchData(
			`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
				import.meta.env.VITE_FIREBASE_KEY
			}`,
			{
				email: enteredData.email,
				password: enteredData.password,
			},
			{ 'Content-Type': 'application/json' }
		);

		reset();
	};

	return (
		<div className="authenticationPage">
			<div className="authenticationWindow">
				<Heading fontSize="38px">Регистрация</Heading>

				<form
					onSubmit={handleSubmit(submitFormHandler)}
					className="authenticationForm"
				>
					<div className="authenticationFormElement mt-[30px] mb-[25px] relative">
						<label className="text-[24px] leading-[28px]">
							Имя
						</label>
						<input
							placeholder="Имя Пользователя"
							className={cn(
								'authenticationInput',
								errors.name && 'inputError'
							)}
							{...register('name')}
						/>
						{errors.name && (
							<ErrorMessage
								className="absolute bottom-[-20px]"
								errorMessage="Введите Имя Пользователя"
							/>
						)}
					</div>

					<div className="authenticationFormElement mb-[25px] relative">
						<label className="text-[24px] leading-[28px]">
							Почта
						</label>
						<input
							placeholder="Почта"
							className={cn(
								'authenticationInput',
								errors.email && 'inputError'
							)}
							{...register('email')}
						/>
						{errors.email && (
							<ErrorMessage
								className="absolute bottom-[-20px]"
								errorMessage="Введите Почту"
							/>
						)}
					</div>

					<div className="authenticationFormElement relative">
						<label className="text-[24px] leading-[28px]">
							Пароль
						</label>
						<input
							placeholder="Пароль"
							className={cn(
								'authenticationInput',
								errors.password && 'inputError'
							)}
							{...register('password')}
						/>
						{errors.password && (
							<ErrorMessage
								className="absolute bottom-[-20px]"
								errorMessage="Введите Пароль"
							/>
						)}
					</div>

					<Button className="py-[10px] mt-[50px]" btnSize="large">
						Создать
					</Button>
				</form>

				<div className="flex items-end gap-[5px] grow-[1]">
					<Span className="text-Gray" fontSize="18px">
						Уже есть аккаунт?
					</Span>
					<Span className="text-Gray" fontSize="18px">
						<a
							href="#"
							className="text-Primary cursor-pointer underline underline-offset-[2px]"
						>
							Войти
						</a>
					</Span>
				</div>
			</div>
		</div>
	);
};
