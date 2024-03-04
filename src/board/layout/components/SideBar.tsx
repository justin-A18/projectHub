import { FC } from 'react';
import { HeaderSide, BoardsSide } from './sidebar';

interface Props {
	isActiveMenu: boolean;
	openMenu: () => void;
	openModal: () => void;
}

export const SideBar: FC<Props> = ({ isActiveMenu, openMenu, openModal }) => {
	return (
		<aside
			className={`w-[90%] sm:w-[20rem] bg-black ${
				isActiveMenu
					? 'translate-x-0 visible opacity-100'
					: 'fixed translate-x-[-40rem] invisible opacity-0'
			} lg:w-full transition-all duration-300 lg:translate-x-0 lg:visible lg:opacity-100 fixed h-full px-7 py-4 flex flex-col gap-8 border-r-[#f6f6f8] bg-white z-10 border-2 lg:relative`}>
			<HeaderSide />

			<h2 className='pl-12 relative before:content-[""] before:w-10 before:bg-[#3F3D56] before:absolute before:h-1 before:left-0 before:top-3 font-bold'>
				Boards
			</h2>

			<button
				className='absolute top-[5.5rem] right-[-1rem] size-10 rounded-full flex items-center justify-center bg-[#3F3D56] text-white lg:hidden hover:opacity-80 transition-opacity duration-300'
				onClick={openMenu}>
				<i className='bx bxs-chevron-left bx-sm'></i>
			</button>

			<BoardsSide openModal={openModal} />
		</aside>
	);
};
