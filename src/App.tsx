import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { Store } from './pages/Store/Store';
import { useAppSelector } from './hooks/useAppSelector';

export const App = () => {
	const token = useAppSelector((state) => state.auth.token);

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Navigate replace to="/registration" />}
				/>
				<Route path="/registration" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				{token && <Route path="/store" element={<Store />} />}
			</Routes>
		</>
	);
};
