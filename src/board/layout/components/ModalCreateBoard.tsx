import { FC } from 'react';
import { useBoardActions, useForm } from '../../../hooks';
import { Board } from '../../../types';

interface Props {
	isActiveModal: boolean;
	closeModal: () => void;
}
export const ModalCreateBoard: FC<Props> = ({ isActiveModal, closeModal }) => {
	const { handleAddBoard } = useBoardActions();

	const { formValues, handleChange, handleSubmit, reset } = useForm({
		title: '',
	});

	const onFormSubmit = () => {
		const board: Board = {
			id: crypto.randomUUID(),
			title: formValues.title,
			cards: [],
		};

		handleAddBoard(board);
		closeModal();
		reset();
	};

	return (
		<div
			className={`w-full h-full fixed bg-black/30 z-40 transition-opacity duration-300 ${
				isActiveModal ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}>
			<div
				className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg p-4 w-[90%] sm:w-[30rem] min-h-20 flex flex-col gap-2 shadow-xl bg-white transition-all duration-300 ${
					isActiveModal
						? 'opacity-100 translate-y-[-50%] visible'
						: 'opacity-0 invisible translate-y-[50rem]'
				}`}>
				<header className='w-full flex items-center justify-between pr-2'>
					<h2 className='text-xl'>Create Board</h2>
					<button
						className='size-10 rounded-md flex items-center justify-center bg-[#3F3D56] text-white hover:opacity-80'
						onClick={closeModal}>
						<i className='bx bx-x bx-sm'></i>
					</button>
				</header>

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
							className='bg-transparent w-full outline-none border-2 border-black rounded-md p-3'
							value={formValues.title}
							maxLength={16}
							onChange={handleChange}
							placeholder='Board title'
						/>
					</div>

					<div className='flex justify-end items-center'>
						<button className='bg-[#3F3D56] text-white transition-colors duration-300 p-3 hover:opacity-80 rounded-md'>
							Create
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
