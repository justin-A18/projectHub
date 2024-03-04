import { Route, Routes } from 'react-router-dom';
import { RouterBoard } from '../board/routes/RouterBoard';
import { RouterAuth } from '../auth/routes/RouterAuth';
import { Error404 } from '../error/Error404';

export const Router = () => {
	return (
		<Routes>
			<Route
				path='/auth/*'
				element={<RouterAuth />}
			/>
			<Route
				path='/*'
				element={<RouterBoard />}
			/>

			<Route
				path='/error404'
				element={<Error404 />}
			/>
		</Routes>
	);
};
