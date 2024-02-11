import React from 'react';

import { Wrapper } from '@/components/ui/Wrapper';
import { CustomLink } from '@/components/ui/CustomLink';
import Image from 'next/image';

export const Header = () => {
	return (
		<header className='relative'>
			<Wrapper className='min-h-screen h-0 w-full flex-col-reverse lg:flex-row  flex justify-center lg:justify-between items-center text-center  overflow-x-hidden lg:text-left  '>
				<div className='mt-4 lg:mt-0'>
					<h1 className='font-bold text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-primary-gray 2xl:w-[30rem]'>
						We Create Startups.
					</h1>
					<p className='my-3 md:my-4 xl:my-6 text-lg md:text-xl  xl:text-2xl text-primary-orange font-bold'>
						We are startup studio that develops and launches new companies.
					</p>
					<CustomLink size={'lg'} variant={'primary'} href='#startups'>
						See our works
					</CustomLink>
				</div>

				<Image
					fetchPriority='high'
					className='lg:self-end max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-none 2xl:absolute bottom-0  right-0 object-contain 2xl:w-1/2 '
					alt='Stratupz header image'
					src={'/imgs/header.png'}
					height={800}
					width={800}
				/>
			</Wrapper>
		</header>
	);
};
