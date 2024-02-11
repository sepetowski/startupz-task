import { HeaderWrapper } from '@/components/ui/HeaderWrapper';
import { Wrapper } from '@/components/ui/Wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Startupz - work with us',
};

const WorkWithUs = () => {
	return (
		<>
			<HeaderWrapper>
				<Wrapper className='min-h-screen h-0 flex flex-col text-c justify-center items-center text-center '>
					<h1 className='font-bold text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-primary-gray 2xl:w-[30rem]'>
						Work with us page
					</h1>
					<p className='my-3 md:my-4 xl:my-6 text-lg md:text-xl  xl:text-2xl text-primary-orange font-bold'>
						no information on this site in the task
					</p>
				</Wrapper>
			</HeaderWrapper>

			<main></main>
		</>
	);
};

export default WorkWithUs;
