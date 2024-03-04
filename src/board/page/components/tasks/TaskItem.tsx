import { FC, useState } from 'react';
import { PayloadDeleteTask, SubTasks, Task, uuid } from '../../../../types';
import { capitalizeFirstLetter } from '../../../helpers';
import { ModalEditTask } from './ModalEditTask';
import { useBoardActions } from '../../../../hooks';

interface Prop {
	task: Task;
	idBoard: uuid;
	idCard: uuid;
}

export const TaskItem: FC<Prop> = ({ task, idBoard, idCard }) => {
	const { handleDeleteTask } = useBoardActions();

	const [isActiveActions, setIsActiveActions] = useState(false);
	const [isEdited, setIsEdited] = useState(false);

	const completedTasks = task.subTasks.filter(
		(sbTask: SubTasks) => sbTask.isComplete
	).length;

	const totalTasks = task.subTasks.length;
	const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

	const difficultyStyle =
		task.difficulty === 'easy'
			? 'bg-green-300 text-green-900'
			: task.difficulty === 'medium'
			? 'bg-yellow-300 text-yellow-900'
			: task.difficulty === 'hard'
			? 'bg-red-300 text-red-900'
			: '';

	const handleClickEdit = () => {
		setIsEdited((prev) => !prev);
	};

	const deleteTask = () => {
		const params: PayloadDeleteTask = {
			idBoard,
			idCard,
			idTask: task.id,
		};

		handleDeleteTask(params);
	};

	return (
		<>
			<li className='w-full'>
				<div className={`w-full relative bg-white rounded-lg min-h-40`}>
					<div
						className='w-full h-3 absolute top-0 rounded-t-lg'
						style={{ backgroundColor: `${task.color}` }}></div>
					<span
						className={`absolute text-white px-4 py-1 font-bold rounded-md left-4 top-1 text-sm`}
						style={{ backgroundColor: `${task.color}` }}>
						{task.tag.toUpperCase()}
					</span>

					<button
						className='absolute top-4 right-2 text-[#3F3D56]'
						onClick={() => setIsActiveActions((prev) => !prev)}>
						<i className='bx bx-dots-horizontal-rounded bx-md'></i>
					</button>

					<div className='text-md absolute top-5 right-14'>
						<b className={`${difficultyStyle} px-2 py-1 rounded-md`}>
							{capitalizeFirstLetter(task.difficulty)}
						</b>
					</div>

					<div
						className={`absolute top-14 right-3 z-10 flex items-center flex-col bg-[#3F3D56] rounded-md text-white transition-all duration-300 ${
							isActiveActions
								? 'opacity-100 visible translate-y-0'
								: 'opacity-0 invisible translate-y-12'
						}`}>
						<button
							className='p-2 w-full rounded-t-md flex items-center justify-center gap-2 hover:bg-[#656377] transition-colors duration-300'
							onClick={handleClickEdit}>
							Edit <i className='bx bxs-edit-alt'></i>
						</button>
						<button
							className='p-2 w-full rounded-b-md flex items-center justify-center gap-2 hover:bg-red-400 transition-colors duration-300'
							onClick={deleteTask}>
							Delete
							<i className='bx bxs-trash-alt'></i>
						</button>
					</div>

					<div className='w-full pt-12 pb-4 px-5 flex flex-col gap-4'>
						<h2 className='text-xl sm:text-2xl'>
							{capitalizeFirstLetter(task.title)}
						</h2>
						<div className='w-full'>
							<p>{progress.toFixed(2)}%</p>
							<progress
								value={completedTasks}
								max={totalTasks}
								className='w-full h-1 rounded-md'></progress>
						</div>
					</div>
				</div>
			</li>

			<ModalEditTask
				task={task}
				isActive={isEdited}
				close={handleClickEdit}
				idBoard={idBoard}
				idCard={idCard}
			/>
		</>
	);
};
