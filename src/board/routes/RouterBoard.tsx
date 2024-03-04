import { Navigate, Route, Routes } from 'react-router-dom';
import { BoardPage, HomePage } from '../page';
import { BoardLayout } from '../layout/BoardLayout';

export const RouterBoard = () => {
	return (
		<BoardLayout>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/board/:id'
					element={<BoardPage />}
				/>
				<Route
					path='/*'
					element={<Navigate to='/error404' />}
				/>
			</Routes>
		</BoardLayout>
	);
};
