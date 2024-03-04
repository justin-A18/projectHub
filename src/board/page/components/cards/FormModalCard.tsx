import { FC } from 'react';
import { Card, PayloadCreateCard, uuid } from '../../../../types';
import { useBoardActions, useForm } from '../../../../hooks';

interface Props {
	idBoard: uuid;
	close: () => void;
}

export const FormModalCard: FC<Props> = ({ close, idBoard }) => {
	const { formValues, handleChange, handleSubmit, reset } = useForm({
		title: '',
	});

	const { handleAddCard } = useBoardActions();

	const onSubmitForm = () => {
		const card: Card = {
			id: crypto.randomUUID(),
			title: formValues.title,
			tasks: [],
		};

		const params: PayloadCreateCard = {
			idBoard,
			card,
		};

		handleAddCard(params);
		
		close();
		reset();
	};

	return (
		<form
			className='flex flex-col gap-4'
			onSubmit={(e) => handleSubmit(e, onSubmitForm)}>
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
					autoFocus
					maxLength={16}
					onChange={handleChange}
					value={formValues.title}
					className='bg-transparent w-full outline-none border-2 border-black rounded-md p-3'
					placeholder='Card title'
				/>
			</div>
			<div className='flex justify-end items-center'>
				<button className='bg-[#3F3D56] text-white transition-colors duration-300 p-3 hover:opacity-80 rounded-md'>
					Create
				</button>
			</div>
		</form>
	);
};
