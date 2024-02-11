import { CustomLink } from '@/components/ui/CustomLink';
import { HeaderWrapper } from '@/components/ui/HeaderWrapper';

const NotFound = () => {
	return (
		<HeaderWrapper className='w-full  flex flex-col justify-center items-center text-center gap-6 text-primary-gray min-h-screen h-0'>
			<h1 className='text-6xl lg:text-8xl xl:text-9xl font-bold  tracking-widest'>404</h1>
			<h2 className='text-2xl md:text-4xl xl:text-5xl font-semibold'>
				Oops, your force is not strong enough.
			</h2>
			<div className='text-lg md:text-xl xl:text-2xl text-primary-orange'>
				<p>This page you requested could not be found.</p>
				<p>May the force be with you!</p>
			</div>

			<CustomLink variant={'primary'} size={'lg'} href='/'>
				Back home
			</CustomLink>
		</HeaderWrapper>
	);
};

export default NotFound;
