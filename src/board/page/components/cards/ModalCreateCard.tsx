import { FC } from 'react';
import { FormModalCard } from './FormModalCard';
import { uuid } from '../../../../types';

interface Props {
	idBoard: uuid;
	isActiveModal: boolean;
	closeModal: () => void;
}
export const ModalCreateCard: FC<Props> = ({
	idBoard,
	isActiveModal,
	closeModal,
}) => {
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
					<h2 className='text-xl'>Create Card</h2>
					<button
						className='size-10 rounded-md flex items-center justify-center bg-[#3F3D56] text-white hover:opacity-80'
						onClick={closeModal}>
						<i className='bx bx-x bx-sm'></i>
					</button>
				</header>

				<FormModalCard
					idBoard={idBoard}
					close={closeModal}
				/>
			</div>
		</div>
	);
};
