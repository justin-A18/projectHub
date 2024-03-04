import { FC } from 'react';
import { BoardItem } from './BoardItem';
import { useAppSelector } from '../../../../hooks/store';

interface Props {
	openModal: () => void;
}

export const BoardsSide: FC<Props> = ({ openModal }) => {
	const { boards } = useAppSelector((state) => state.board);
	return (
		<ul className='flex flex-col gap-4 w-full'>
			<li className='w-full'>
				<form className='w-full rounded-md relative'>
					<input
						type='text'
						placeholder='Search board'
						className='bg-transparent w-full h-full outline-none border-2 border-black p-2 rounded-md'
					/>
					<button className='absolute top-[11px] right-[5px] text-gray-400'>
						<i className='bx bx-search bx-sm'></i>
					</button>
				</form>
			</li>

			<hr className='border-[#3F3D56]' />

			{boards.map((board) => (
				<BoardItem
					key={board.id}
					board={board}
				/>
			))}

			<li
				className='px-2 py-3 w-full flex items-center gap-2 justify-center rounded-md cursor-pointer bg-[#3F3D56] text-white hover:opacity-80 transition-opacity duration-300 font-medium'
				onClick={openModal}>
				Create board <i className='bx bx-plus bx-sm'></i>
			</li>
		</ul>
	);
};
