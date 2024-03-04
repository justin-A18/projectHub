import { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { uuid } from '../../types';
import { useAppSelector } from '../../hooks';
import { capitalizeFirstLetter } from '../helpers';
import { ModalCreateTask, ModalCreateCard, CardItem } from './components';

export const BoardPage = () => {
	const { id } = useParams<uuid>();
	const { boards } = useAppSelector((state) => state.board);
	const [isActiveModalCard, setIsActiveModalCard] = useState(false);
	const [isActiveModalTask, setIsActiveModalTask] = useState(false);
	const [idCard, setIdCard] = useState('');

	const boardFound = useMemo(
		() => boards.find((board) => board.id === id),
		[id, boards]
	);

	if (!boardFound || !id) return <Navigate to='/' />;

	const handleOpenModalCard = () => {
		setIsActiveModalCard((prev) => !prev);
	};

	const handleOpenModalTask = () => {
		setIsActiveModalTask((prev) => !prev);
	};

	const getCardId = (id: uuid) => {
		setIdCard(id);
		setIsActiveModalTask(true);
	};

	return (
		<>
			<section className='w-full min-h-screen pb-10'>
				<h1 className='pl-16 py-8 lg:p-6 text-[#0C0C38] text-2xl md:text-4xl font-medium'>
					Board:
					<span className="ml-2 relative before:content-[''] before:bg-[#FF8A5A] before:w-full before:h-[3px] before:absolute before:bottom-[-5px]">
						{capitalizeFirstLetter(boardFound?.title)}
					</span>
				</h1>

				<div className='p-3 sm:p-6 w-full h-full bg-[#F2F2F7] flex flex-col gap-4'>
					<header className='flex justify-end'>
						<button
							className='bg-[#3F3D56] rounded-md text-white flex items-center gap-2 p-3 hover:opacity-80'
							onClick={handleOpenModalCard}>
							<i className='bx bx-plus bx-sm'></i> Add new Card
						</button>
					</header>

					<div className='grid w-full h-full grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4'>
						{boardFound.cards.map((card) => (
							<CardItem
								key={card.id}
								card={card}
								boardId={id}
								openModal={getCardId}
							/>
						))}
					</div>
				</div>
			</section>

			<ModalCreateCard
				idBoard={id}
				isActiveModal={isActiveModalCard}
				closeModal={handleOpenModalCard}
			/>

			<ModalCreateTask
				idBoard={id}
				idCard={idCard}
				isActiveModal={isActiveModalTask}
				closeModal={handleOpenModalTask}
			/>
		</>
	);
};
