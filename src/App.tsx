import { Route, Routes, Navigate } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Registration } from './pages/Registration/Registration';
import { Store } from './pages/Store/Store';
import { useAppSelector } from './hooks/useAppSelector';

export const App = () => {
	useAppSelector((state) => state.auth.token);
	const token = sessionStorage.getItem('idToken');

	return (
		<>
			<Routes>
				<Route
					path="my-cloud-v2/"
					element={<Navigate replace to="/registration" />}
				/>
				<Route
					path="my-cloud-v2/registration"
					element={<Registration />}
				/>
				<Route path="my-cloud-v2/login" element={<Login />} />
				{token && (
					<Route path="my-cloud-v2/store" element={<Store />} />
				)}
			</Routes>
		</>
	);
};
