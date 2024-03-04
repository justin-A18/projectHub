type uuid = string;

//<========USER=========>

export interface AuthState {
	users: User[];
	isLogged: boolean;
}

export interface User {
	id: uuid;
	userName: string;
	email: string;
	password: string;
	isActive: boolean;
}

//<=======PAYLOADS=========>

export interface PayloadLogin {
	email: string;
	password: string;
}

export interface PayloadEdit {
	id: uuid;
	newTitle: string;
}

export interface PayloadDelete {
	id: uuid;
}

export interface PayloadCreateCard {
	card: Card;
	idBoard: uuid;
}

export interface PayloadEditCard {
	idBoard: uuid;
	idCard: uuid;
	newValue: string;
}

export interface PayloadDeleteCard {
	idBoard: uuid;
	idCard: uuid;
}

export interface PayloadCreateTask extends PayloadDeleteCard {
	task: Task;
}

export interface PayloadEditTask extends PayloadDeleteCard {
	idTask: uuid;
	element: string;
	newValue: string;
}

export interface PayloadDeleteTask extends PayloadDeleteCard {
	idTask: uuid;
}

//<==========BOARD===========>

export interface BoardState {
	boards: Board[];
}

export interface Board {
	id: uuid;
	cards: Card[];
	title: string;
}

export interface Card {
	id: uuid;
	title: string;
	tasks: Task[];
}

export interface SubTasks {
	id: uuid;
	title: string;
	isComplete: boolean;
}

export interface Task {
	id: uuid;
	tag: string;
	title: string;
	color: string;
	subTasks: [];
	difficulty: string;
	description: string;
}
