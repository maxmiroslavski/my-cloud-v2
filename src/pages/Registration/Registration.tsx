import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Span } from '../../components/Span/Span';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';
import { CircleLoader } from '../../components/CircleLoader/CircleLoader';

import { IRegistrationFormData } from './Registration.interface';

import cn from 'classnames';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EyeButton } from '../../components/EyeButton/EyeButton';

export const Registration = () => {
	const navigate = useNavigate();

	const schema: ZodType<IRegistrationFormData> = z.object({
		name: z.string().min(1),
		email: z.string().email(),
		password: z.string().min(10).max(30),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegistrationFormData>({
		resolver: zodResolver(schema),
	});

	const [showPassword, setShowPassword] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const submitFormHandler = async (enteredData: IRegistrationFormData) => {
		setIsLoading(true);

		const res = await fetch(
			`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
				import.meta.env.VITE_FIREBASE_KEY
			}`,
			{
				method: 'POST',
				body: JSON.stringify({
					email: enteredData.email,
					password: enteredData.password,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		if (!res.ok) {
			setIsError(true);
			setIsLoading(false);
			return;
		}

		setIsError(false);
		setIsLoading(false);

		navigate('/login');
	};

	return (
		<div className="authenticationPage">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.2 }}
				className="authenticationWindow"
			>
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
							type={showPassword ? 'text' : 'password'}
							placeholder="Пароль"
							className={cn(
								'authenticationInput',
								errors.password && 'inputError'
							)}
							{...register('password')}
						/>
						<EyeButton
							showPassword={showPassword}
							onClick={() => setShowPassword(!showPassword)}
						/>
						{errors.password && (
							<ErrorMessage
								className="absolute bottom-[-20px]"
								errorMessage="Введите Пароль (От 10 до 30 Символов)"
							/>
						)}
					</div>

					<div className="w-[100%] relative text-center mt-[50px]">
						{!isLoading ? (
							<Button className="py-[10px]" btnSize="large">
								Создать
							</Button>
						) : (
							<CircleLoader className="m-auto" />
						)}
						{isError && (
							<ErrorMessage
								className="absolute bottom-[-20px] left-0 right-0"
								errorMessage="Такой пользователь уже существет"
							/>
						)}
					</div>
				</form>

				<div className="flex items-end gap-[5px] grow-[1]">
					<Span className="text-Gray" fontSize="18px">
						Уже есть аккаунт?
					</Span>
					<Span className="text-Gray" fontSize="18px">
						<Link
							to="/login"
							className="text-Primary cursor-pointer underline underline-offset-[2px]"
						>
							Войти
						</Link>
					</Span>
				</div>
			</motion.div>
		</div>
	);
};
