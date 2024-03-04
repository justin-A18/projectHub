import { FC } from 'react';
import { PayloadCreateTask, Task, uuid } from '../../../../types';
import { useBoardActions, useForm } from '../../../../hooks';
import { colorRandom } from '../../../helpers/colorRandom';

interface Props {
	idBoard: uuid;
	idCard: uuid;
	close: () => void;
}

export const FormModalTask: FC<Props> = ({ close, idBoard, idCard }) => {
	const { handleAddTask } = useBoardActions();

	const { formValues, handleChange, handleSubmit, reset } = useForm({
		tag: '',
		title: '',
		difficulty: '',
	});

	const onFormSubmit = () => {
		const task: Task = {
			id: crypto.randomUUID(),
			subTasks: [],
			tag: formValues.tag,
			title: formValues.title,
			color: colorRandom(),
			difficulty: formValues.difficulty,
			description: 'Agrega una description',
		};

		const params: PayloadCreateTask = {
			idBoard,
			idCard,
			task,
		};

		handleAddTask(params);
		close();
		reset();
	};

	return (
		<form
			className='flex flex-col gap-4'
			onSubmit={(e) => handleSubmit(e, onFormSubmit)}>
			<div className='relative mt-4'>
				<label
					htmlFor='title'
					className='absolute bg-white top-[-16px] left-2 px-1'>
					Title
				</label>
				<input
					id='title'
					type='text'
					name='title'
					value={formValues.title}
					onChange={handleChange}
					className='bg-transparent w-full outline-none border-2 border-black rounded-md p-3'
					placeholder='Task title'
				/>
			</div>

			<div className='relative mt-4'>
				<label
					htmlFor='tag'
					className='absolute bg-white top-[-16px] left-2 px-1'>
					Tag
				</label>
				<select
					name='tag'
					id='tag'
					required
					value={formValues.tag}
					onChange={handleChange}
					className='bg-transparent w-full outline-none border-2 border-black rounded-md p-3'>
					<option value=''>Select option</option>
					<option value='qa'>QA</option>
					<option value='desing'>Desing</option>
					<option value='development'>Development</option>
					<option value='otro'>Otro</option>
				</select>
			</div>

			<div className='relative mt-4'>
				<label
					htmlFor='difficulty'
					className='absolute bg-white top-[-16px] left-2 px-1'>
					Dificulty
				</label>
				<select
					name='difficulty'
					id='difficulty'
					required
					value={formValues.difficulty}
					onChange={handleChange}
					className='bg-transparent w-full outline-none border-2 border-black rounded-md p-3'>
					<option value=''>Select option</option>
					<option value='easy'>⭐ Easy</option>
					<option value='medium'>⭐⭐ Medium</option>
					<option value='hard'>⭐⭐⭐ Hard</option>
				</select>
			</div>

			<div className='flex justify-end items-center'>
				<button className='bg-[#3F3D56] text-white transition-colors duration-300 p-3 hover:opacity-80 rounded-md'>
					Create
				</button>
			</div>
		</form>
	);
};
