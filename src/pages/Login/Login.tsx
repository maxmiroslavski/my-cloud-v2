import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Label } from '../../components/Label/Label';
import { Span } from '../../components/Span/Span';

export const Login = () => {
	return (
		<div className="authenticationPage">
			<div className="authenticationWindow">
				<Heading fontSize="38px">Вход</Heading>

				<form className="authenticationForm">
					<div className="authenticationFormElement mt-[30px] mb-[25px] relative">
						<Label>Почта</Label>
						<input
							placeholder="Почта"
							className="authenticationInput inputError"
						/>
					</div>

					<div className="authenticationFormElement relative">
						<Label>Пароль</Label>
						<input
							placeholder="Пароль"
							className="authenticationInput"
						/>
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
