export const HeaderSide = () => {
	return (
		<header className='flex items-center justify-between rounded-md cursor-pointer w-full'>
			<div className='flex items-center gap-2 '>
				<img
					className='size-10 rounded-full object-cover'
					src='https://img.freepik.com/foto-gratis/mujer-positiva-sonriendo-modelo-divertido-que-presenta-cerca-pared-rosada-estudio_158538-3433.jpg'
					alt='avatar'
				/>
				<div>
					<p className='font-bold'>Lucy Mann</p>
					<small className='font-medium'>Product Manager</small>
				</div>
			</div>
			<button className='flex items-center justify-center size-7 rounded-md bg-[#3F3D56] text-white hover:opacity-80'>
				<i className='bx bx-dots-horizontal-rounded bx-sm'></i>
			</button>
		</header>
	);
};
