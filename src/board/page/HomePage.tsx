export const HomePage = () => {
	return (
		<section className='w-full min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='flex flex-col items-center space-y-4'>
				<img
					className='size-96'
					src='./undraw.svg'
					alt='Ilustración de proyecto'
				/>
				<h1 className='text-4xl font-bold text-center text-gray-800'>
					Bienvenido a Project Hub
				</h1>
				<p className='text-xl text-gray-600'>
					¡Empieza a dar vida a tus ideas!
				</p>
			</div>
		</section>
	);
};
