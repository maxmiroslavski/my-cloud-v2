import { Button } from '../../components/Button/Button';
import { Heading } from '../../components/Heading/Heading';
import { Label } from '../../components/Label/Label';
import { Span } from '../../components/Span/Span';

export const Registration = () => {
	return (
		<div className="authenticationPage">
			<div className="authenticationWindow">
				<Heading fontSize="38px">Регистрация</Heading>

				<form className="authenticationForm">
					<div className="authenticationFormElement">
						<Label>Имя</Label>
						<input
							placeholder="Имя Пользователя"
							className="authenticationInput"
						/>
					</div>

					<div className="authenticationFormElement">
						<Label>Почта</Label>
						<input
							placeholder="Почта"
							className="authenticationInput"
						/>
					</div>

					<div className="authenticationFormElement">
						<Label>Пароль</Label>
						<input
							placeholder="Пароль"
							className="authenticationInput"
						/>
					</div>

					<Button className="py-[10px]" btnSize="large">
						Создать
					</Button>

					<div className="flex items-end gap-[5px]">
						<Span className="text-Gray" fontSize="18px">
							Уже есть аккаунт?
						</Span>
						<Span className="text-Gray" fontSize="18px">
							<a
								href="#"
								className="text-Primary underline cursor-pointer"
							>
								Войти
							</a>
						</Span>
					</div>
				</form>
			</div>
		</div>
	);
};
