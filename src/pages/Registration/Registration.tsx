import { Heading } from '../../components/Heading/Heading';
import { Label } from '../../components/Label/Label';

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
				</form>
			</div>
		</div>
	);
};
