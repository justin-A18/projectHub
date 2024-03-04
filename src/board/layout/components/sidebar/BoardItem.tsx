import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Board, PayloadEdit } from '../../../../types';
import { useBoardActions, useForm } from '../../../../hooks';

interface Props {
	board: Board;
}

export const BoardItem: FC<Props> = ({ board }) => {
	const [isEdited, setIsEdited] = useState(false);
	const { handleDeleteBoard, handleEditBoard } = useBoardActions();

	const { formValues, handleChange, handleSubmit } = useForm({
		newvalue: board.title,
	});

	const onFormSubmit = () => {
		const param: PayloadEdit = {
			id: board.id,
			newTitle: formValues.newvalue,
		};

		handleEditBoard(param);
		setIsEdited(false);
	};

	return (
		<li
			className='w-full'
			id={board.id}
			onDoubleClick={() => setIsEdited((prev) => !prev)}>
			{!isEdited ? (
				<NavLink
					to={`/board/${board.id}`}
					className={`px-2 py-3 w-full flex items-center justify-between bg-[#F2F2F7] rounded-md`}>
					<span>{board.title}</span>
					<button
						className='flex items-center justify-center'
						onClick={() => handleDeleteBoard(board.id)}>
						<i className='bx bxs-trash-alt bx-sm text-red-400'></i>
					</button>
				</NavLink>
			) : (
				<form
					className='px-2 py-3 w-full flex items-center justify-between bg-[#F2F2F7] rounded-md'
					onSubmit={(e) => handleSubmit(e, onFormSubmit)}>
					<input
						type='text'
						name='newvalue'
						value={formValues.newvalue}
						autoFocus
						maxLength={16}
						onChange={handleChange}
						className='bg-transparent outline-none w-full'
						placeholder='new title'
					/>
				</form>
			)}
		</li>
	);
};
