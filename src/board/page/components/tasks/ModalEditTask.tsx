import { FC, useState } from 'react';
import { Task, uuid } from '../../../../types';
import { useBoardActions, useForm } from '../../../../hooks';

interface Props {
	task: Task;
	idBoard: uuid;
	idCard: uuid;
	isActive: boolean;
	close: () => void;
}

export const ModalEditTask: FC<Props> = ({
	task,
	idBoard,
	idCard,
	close,
	isActive,
}) => {
	const [isEditedTitle, setIsEditedTitle] = useState(false);
	const [isEditedDesc, setIsEditedDesc] = useState(false);

	const { handleEditTask } = useBoardActions();

	const { formValues, handleChange, handleSubmit } = useForm({
		title: task.title,
		description: task.description,
	});

	const handleEditTitle = () => {
		const params = {
			idBoard,
			idCard,
			idTask: task.id,
			newValue: formValues.title,
			element: 'title',
		};

		handleEditTask(params);
		setIsEditedTitle(false);
	};

	const handleEditDescription = () => {
		const params = {
			idBoard,
			idCard,
			idTask: task.id,
			newValue: formValues.description,
			element: 'description',
		};

		handleEditTask(params);
		setIsEditedDesc(false);
	};

	return (
		<div
			className={`w-full h-full fixed top-0 left-0 bg-black/30 z-40 transition-opacity duration-300 ${
				isActive ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}>
			<div
				className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-4 w-[90%] sm:w-[30rem] min-h-20 flex flex-col gap-2 shadow-xl bg-white transition-all duration-300 ${
					isActive
						? 'opacity-100 translate-y-[-50%] visible'
						: 'opacity-0 invisible translate-y-[50rem]'
				}`}>
				<div
					className='absolute w-full h-3 top-0 left-0 rounded-t-lg'
					style={{ backgroundColor: `${task.color}` }}></div>
				<button
					className='absolute top-4 right-2 size-10 rounded-md flex items-center justify-center bg-[#3F3D56] text-white hover:opacity-80'
					onClick={close}>
					<i className='bx bx-x bx-sm'></i>
				</button>

				<div className='mt-4 flex flex-col gap-4'>
					<div onDoubleClick={() => setIsEditedTitle((prev) => !prev)}>
						<h2 className='flex items-center gap-2 text-xl text-[#999999] font-bold'>
							<i className='bx bx-hash'></i> Title:
						</h2>
						{!isEditedTitle ? (
							<p
								className='text-lg'
								style={{
									overflowWrap: 'break-word',
								}}>
								{task.title}
							</p>
						) : (
							<form
								className='w-full'
								onSubmit={(e) => handleSubmit(e, handleEditTitle)}>
								<input
									type='text'
									name='title'
									value={formValues.title}
									onChange={handleChange}
									className='w-full outline-none p-1 rounded-md border-2 border-black'
								/>
							</form>
						)}
					</div>

					<div onDoubleClick={() => setIsEditedDesc((prev) => !prev)}>
						<h2 className='flex items-center gap-2 text-xl text-[#999999] font-bold'>
							<i className='bx bx-hash'></i> Description:
						</h2>
						{!isEditedDesc ? (
							<p
								className='text-lg'
								style={{
									overflowWrap: 'break-word',
								}}>
								{task.description}
							</p>
						) : (
							<form
								className='w-full'
								onSubmit={(e) => handleSubmit(e, handleEditDescription)}>
								<input
									type='text'
									name='description'
									value={formValues.description}
									onChange={handleChange}
									className='w-full outline-none p-1 rounded-md border-2 border-black'
								/>
							</form>
						)}
					</div>

					<div className='flex flex-col gap-2'>
						<h2 className='text-xl flex items-center gap-2 text-[#999999] font-bold'>
							<i className='bx bx-task bx-sm'></i> Tasks:
						</h2>

						<ul className='w-full flex flex-col gap-2'>
							<li className='text-lg w-full flex items-center justify-between gap-2 bg-gray-100 p-2 rounded-md'>
								<div className='flex items-center gap-2'>
									<input
										type='checkbox'
										className='size-4'
									/>
									<span>Tarea 1</span>
								</div>
								<button className='text-red-400'>
									<i className='bx bxs-trash-alt bx-sm'></i>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
