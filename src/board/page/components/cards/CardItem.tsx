import { FC, useState } from 'react';
import { capitalizeFirstLetter } from '../../../helpers/';
import { useBoardActions, useForm } from '../../../../hooks/';
import { TaskItem } from '../tasks/TaskItem';
import {
	Card,
	PayloadDeleteCard,
	PayloadEditCard,
	uuid,
} from '../../../../types';

interface Props {
	card: Card;
	boardId: uuid;
	openModal: (id: uuid) => void;
}

export const CardItem: FC<Props> = ({ card, openModal, boardId }) => {
	const [isEdited, setEdited] = useState(false);

	const { formValues, handleChange, handleSubmit } = useForm({
		newvalue: card.title,
	});

	const { handleEditCard, handleDeleteCard } = useBoardActions();

	const onFormSubmit = () => {
		if (formValues.newvalue === '') return;

		const params: PayloadEditCard = {
			idBoard: boardId,
			idCard: card.id,
			newValue: formValues.newvalue,
		};

		handleEditCard(params);
		setEdited(false);
	};

	const deleteCard = () => {
		const params: PayloadDeleteCard = {
			idBoard: boardId,
			idCard: card.id,
		};

		handleDeleteCard(params);
	};

	return (
		<article className='w-full flex flex-col gap-6 rounded-lg'>
			<header
				className='w-full flex items-center justify-between'
				onDoubleClick={() => setEdited((prev) => !prev)}>
				{!isEdited ? (
					<h2 className='text-xl text-[#0C0C38] font-bold'>
						{capitalizeFirstLetter(card.title)} ({card.tasks.length})
					</h2>
				) : (
					<form
						onSubmit={(e) => handleSubmit(e, onFormSubmit)}
						className='w-full'>
						<input
							type='text'
							value={formValues.newvalue}
							autoFocus
							name='newvalue'
							maxLength={16}
							className='bg-transparent w-full outline-none text-lg'
							onChange={handleChange}
						/>
					</form>
				)}
				<button
					className='flex items-center justify-center size-8'
					onClick={deleteCard}>
					<i className='bx bxs-trash-alt bx-sm text-red-400'></i>
				</button>
			</header>
			<hr className='border-[#0C0C38]' />

			<ul className='w-full flex items-center flex-col gap-4'>
				<li
					className='w-full h-20 bg-white rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer flex items-center justify-center'
					onClick={() => openModal(card.id)}>
					<i className='bx bx-plus bx-sm'></i>
				</li>

				{card.tasks.map((task) => (
					<TaskItem
						key={task.id}
						task={task}
						idBoard={boardId}
						idCard={card.id}
					/>
				))}
			</ul>
		</article>
	);
};
