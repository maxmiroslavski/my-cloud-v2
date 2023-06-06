import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';

export const App = () => {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Navigate replace to="/registration" />}
				/>
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
			</Routes>
			{/* <Login /> */}
		</>
	);
};
