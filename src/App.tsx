import { Heading } from './components/Heading/Heading';
import { Input } from './components/Input/Input';
import { Span } from './components/Span/Span';

export const App = () => {
	return (
		<>
			<div className="flex-center container bg-Gray m-auto">
				<Heading fontSize="20px">Salam..</Heading>
				<Input />
				<Span fontSize="16px">123</Span>
			</div>
		</>
	);
};
