import { Link } from 'react-router-dom';

export const Error404 = () => {
	return (
		<main className='w-full min-h-screen'>
			<section className='w-full h-full flex flex-col items-center justify-center'>
				<div>
					<img
						className='size-96'
						src='/warning.svg'
						alt='warning'
					/>
				</div>
				<footer className='flex flex-col items-center gap-4'>
					<h2 className='text-2xl'>Uh-Oh.</h2>
					<p className='text-xl'>Looks Like You Are Lost</p>
					<Link
						to='/'
						className='px-4 py-2 border-2 border-black rounded-md hover:bg-[#6C63FF] hover:text-white hover:border-[#6C63FF] transition-all duration-300'>
						Come back Home
					</Link>
				</footer>
			</section>
		</main>
	);
};
