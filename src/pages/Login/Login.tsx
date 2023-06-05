import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Span } from '../../components/Span/Span';

import cn from 'classnames';

export const Login = () => {
	return (
		<div className="authenticationPage">
			<div className="authenticationWindow">
				<Heading fontSize="38px">Вход</Heading>

				<form className="authenticationForm">
					<div className="authenticationFormElement mt-[30px] mb-[25px] relative">
						<label className="text-[24px] leading-[28px]">
							Почта
						</label>
						<input
							placeholder="Почта"
							className={cn('authenticationInput', 'inputError')}
						/>
						<Paragraph
							className="absolute bottom-[-20px]"
							isError={true}
						>
							Введите Почту
						</Paragraph>
					</div>

					<div className="authenticationFormElement relative">
						<label className="text-[24px] leading-[28px]">
							Пароль
						</label>
						<input
							placeholder="Пароль"
							className={cn('authenticationInput', 'inputError')}
						/>
						<Paragraph
							className="absolute bottom-[-20px]"
							isError={true}
						>
							Введите Пароль
						</Paragraph>
					</div>

					<Button className="py-[10px] mt-[50px]" btnSize="large">
						Войти
					</Button>
				</form>

				<div className="flex items-end gap-[5px] grow-[1]">
					<Span className="text-Gray" fontSize="18px">
						Еще нет аккаунта?
					</Span>
					<Span className="text-Gray" fontSize="18px">
						<a
							href="#"
							className="text-Primary cursor-pointer underline underline-offset-[2px]"
						>
							Создать
						</a>
					</Span>
				</div>
			</div>
		</div>
	);
};
