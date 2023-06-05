import { Heading } from './components/Heading/Heading';
import { Input } from './components/Input/Input';

export const App = () => {
	return (
		<>
			<div className="flex-center container bg-Gray m-auto">
				<Heading fontSize="20px">Salam..</Heading>
				<Input />
			</div>
		</>
	);
};
