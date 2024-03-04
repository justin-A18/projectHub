import { FC, useState } from 'react';
import { SideBar } from './components/SideBar';
import { ModalCreateBoard } from './components/ModalCreateBoard';

interface Props {
	children: React.ReactNode;
}

export const BoardLayout: FC<Props> = ({ children }) => {
	const [isActiveMenu, setIsActiveMenu] = useState(false);
	const [isActiveCreate, setIsActiveCreate] = useState(false);

	const handleOpenMenu = () => {
		setIsActiveMenu((prev) => !prev);
	};

	const handleOpenCreateBoard = () => {
		setIsActiveCreate((prev) => !prev);
	};

	return (
		<main className='grid overflow-hidden lg:grid-cols-[20rem_1fr] w-full min-h-screen relative'>
			<SideBar
				isActiveMenu={isActiveMenu}
				openMenu={handleOpenMenu}
				openModal={handleOpenCreateBoard}
			/>

			{children}

			<button
				className='absolute top-8 left-2  size-10 rounded-full flex items-center justify-center bg-[#3F3D56] text-white lg:hidden'
				onClick={handleOpenMenu}>
				<i className='bx bx-menu-alt-left bx-sm'></i>
			</button>

			<ModalCreateBoard
				isActiveModal={isActiveCreate}
				closeModal={handleOpenCreateBoard}
			/>
		</main>
	);
};
