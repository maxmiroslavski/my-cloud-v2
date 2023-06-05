import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Span } from '../../components/Span/Span';

import { RegistrationFormData } from './Registration.interface';

import cn from 'classnames';
import { motion } from 'framer-motion';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export const Registration = () => {
	const schema: ZodType<RegistrationFormData> = z.object({
		name: z.string().min(1),
		email: z.string().email(),
		password: z.string().min(10).max(30),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegistrationFormData>({
		resolver: zodResolver(schema),
	});

	const submitFormHandler = (data: RegistrationFormData) => {
		console.log(data);
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
							<p
								className={cn(
									errors.name && 'text-ErrorLightRed',
									'absolute bottom-[-20px] font-light leading-[19px]'
								)}
							>
								Введите Почту
							</p>
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
							<p
								className={cn(
									errors.name && 'text-ErrorLightRed',
									'absolute bottom-[-20px] font-light leading-[19px]'
								)}
							>
								Введите Пароль
							</p>
						)}
					</div>

					<Button className="py-[10px] mt-[50px]" btnSize="large">
						Войти
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
