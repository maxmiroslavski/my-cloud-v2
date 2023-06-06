import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Span } from '../../components/Span/Span';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { CircleLoader } from '../../components/CircleLoader/CircleLoader';

import { ILoginFormData } from './Login.interface';

import cn from 'classnames';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
	const navigate = useNavigate();

	const schema: ZodType<ILoginFormData> = z.object({
		email: z.string().email(),
		password: z.string().min(10).max(30),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginFormData>({
		resolver: zodResolver(schema),
	});

	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const submitFormHandler = async (enteredData: ILoginFormData) => {
		setIsLoading(true);
		setIsError(false);

		const res = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
				import.meta.env.VITE_FIREBASE_KEY
			}`,
			{
				method: 'POST',
				body: JSON.stringify({
					email: enteredData.email,
					password: enteredData.password,
					returnSecureToken: true,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		console.log(res);

		if (!res.ok) {
			setIsError(true);
			setIsLoading(false);
			return;
		}

		const resData = await res.json();

		console.log(resData.idToken);

		sessionStorage.setItem('idToken', resData.idToken);

		setIsError(false);
		setIsLoading(false);

		navigate('/store');
	};

	console.log(isError);

	return (
		<div className="authenticationPage">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
				className="authenticationWindow"
			>
				<Heading fontSize="38px">Вход</Heading>

				<form
					onSubmit={handleSubmit(submitFormHandler)}
					className="authenticationForm"
				>
					<div className="authenticationFormElement mt-[30px] mb-[25px] relative">
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
								errorMessage="Введите Имя Пользователя"
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

					<div className="w-[100%] relative text-center mt-[50px]">
						{!isLoading ? (
							<Button className="py-[10px]" btnSize="large">
								Войти
							</Button>
						) : (
							<CircleLoader className="m-auto" />
						)}
						{isError && (
							<ErrorMessage
								className="absolute bottom-[-20px] left-0 right-0"
								errorMessage="Неверная почта или пароль"
							/>
						)}
					</div>
				</form>

				<div className="flex items-end gap-[5px] grow-[1]">
					<Span className="text-Gray" fontSize="18px">
						Еще нет аккаунта?
					</Span>
					<Span className="text-Gray" fontSize="18px">
						<Link
							to="/registration"
							className="text-Primary cursor-pointer underline underline-offset-[2px]"
						>
							Создать
						</Link>
					</Span>
				</div>
			</motion.div>
		</div>
	);
};
