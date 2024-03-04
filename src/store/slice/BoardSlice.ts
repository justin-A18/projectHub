import { createSlice } from '@reduxjs/toolkit';
import {
	Board,
	BoardState,
	PayloadEdit,
	PayloadDelete,
	PayloadCreateCard,
	PayloadEditCard,
	PayloadDeleteCard,
	PayloadCreateTask,
	PayloadDeleteTask,
	PayloadEditTask,
} from '../../types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: BoardState = {
	boards: [],
};

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		addBoard: (state, action: PayloadAction<Board>) => {
			state.boards = [...state.boards, action.payload];
		},
		editBoard: (state, action: PayloadAction<PayloadEdit>) => {
			const { id, newTitle } = action.payload;

			state.boards = state.boards.map((board) => {
				if (board.id === id) {
					return {
						...board,
						title: newTitle,
					};
				}

				return board;
			});
		},
		deleteBoard: (state, action: PayloadAction<PayloadDelete>) => {
			const { id } = action.payload;
			state.boards = state.boards.filter((board) => board.id !== id);
		},

		addCard: (state, action: PayloadAction<PayloadCreateCard>) => {
			const { card, idBoard } = action.payload;

			state.boards = state.boards.map((board) => {
				if (board.id === idBoard) {
					return {
						...board,
						cards: [...board.cards, card],
					};
				}

				return board;
			});
		},
		editCard: (state, action: PayloadAction<PayloadEditCard>) => {
			const { idBoard, idCard, newValue } = action.payload;

			state.boards = state.boards.map((board) => {
				if (board.id === idBoard) {
					return {
						...board,
						cards: board.cards.map((card) => {
							if (card.id === idCard) {
								return {
									...card,
									title: newValue,
								};
							}

							return card;
						}),
					};
				}

				return board;
			});
		},
		deleteCard: (state, action: PayloadAction<PayloadDeleteCard>) => {
			const { idBoard, idCard } = action.payload;

			state.boards = state.boards.map((board) => {
				if (board.id === idBoard) {
					return {
						...board,
						cards: board.cards.filter((card) => card.id !== idCard),
					};
				}

				return board;
			});
		},

		addTask: (state, action: PayloadAction<PayloadCreateTask>) => {
			const { idBoard, idCard, task } = action.payload;

			state.boards = state.boards.map((board) => {
				if (board.id === idBoard) {
					return {
						...board,
						cards: board.cards.map((card) => {
							if (card.id === idCard) {
								return {
									...card,
									tasks: [...card.tasks, task],
								};
							}
							return card;
						}),
					};
				}

				return board;
			});
		},
		editTask: (state, action: PayloadAction<PayloadEditTask>) => {
			const { element, idBoard, idCard, idTask, newValue } = action.payload;

			state.boards = state.boards.map((board) => {
				if (board.id === idBoard) {
					return {
						...board,
						cards: board.cards.map((card) => {
							if (card.id === idCard) {
								return {
									...card,
									tasks: card.tasks.map((task) => {
										if (task.id === idTask) {
											return {
												...task,
												title: element === 'title' ? newValue : task.title,
												description:
													element === 'description'
														? newValue
														: task.description,
											};
										}

										return task;
									}),
								};
							}
							return card;
						}),
					};
				}

				return board;
			});
		},
		deleteTask: (state, action: PayloadAction<PayloadDeleteTask>) => {
			const { idBoard, idCard, idTask } = action.payload;

			state.boards = state.boards.map((board) => {
				if (board.id === idBoard) {
					return {
						...board,
						cards: board.cards.map((card) => {
							if (card.id === idCard) {
								return {
									...card,
									tasks: card.tasks.filter((card) => card.id !== idTask),
								};
							}
							return card;
						}),
					};
				}
				return board;
			});
		},

		

		
	},
});

export const {
	addBoard,
	editBoard,
	deleteBoard,
	addCard,
	editCard,
	deleteCard,
	addTask,
	editTask,
	deleteTask,
} = boardSlice.actions;
