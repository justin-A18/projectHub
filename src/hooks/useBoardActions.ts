import { useAppDispatch } from './store';

import {
	Board,
	PayloadEdit,
	PayloadEditCard,
	PayloadEditTask,
	PayloadCreateCard,
	PayloadCreateTask,
	PayloadDeleteCard,
	PayloadDeleteTask,
	uuid,
} from '../types';

import {
	addBoard,
	addCard,
	addTask,
	deleteBoard,
	deleteCard,
	deleteTask,
	editBoard,
	editCard,
	editTask,
} from '../store/slice/BoardSlice';

export const useBoardActions = () => {
	const dispatch = useAppDispatch();

	const handleAddBoard = (board: Board) => {
		dispatch(addBoard(board));
	};

	const handleEditBoard = (params: PayloadEdit) => {
		dispatch(editBoard(params));
	};

	const handleDeleteBoard = (id: uuid) => {
		dispatch(deleteBoard({ id }));
	};

	const handleAddCard = (params: PayloadCreateCard) => {
		dispatch(addCard(params));
	};

	const handleEditCard = (params: PayloadEditCard) => {
		dispatch(editCard(params));
	};

	const handleDeleteCard = (params: PayloadDeleteCard) => {
		dispatch(deleteCard(params));
	};

	const handleAddTask = (params: PayloadCreateTask) => {
		dispatch(addTask(params));
	};

	const handleEditTask = (params: PayloadEditTask) => {
		dispatch(editTask(params));
	};

	const handleDeleteTask = (params: PayloadDeleteTask) => {
		dispatch(deleteTask(params));
	};

	return {
		handleAddTask,
		handleAddCard,
		handleAddBoard,
		handleEditCard,
		handleEditBoard,
		handleEditTask,
		handleDeleteCard,
		handleDeleteTask,
		handleDeleteBoard,
	};
};
