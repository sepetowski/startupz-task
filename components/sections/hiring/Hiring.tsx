import React from 'react';

import { Section } from '@/components/ui/Section';
import { Wrapper } from '@/components/ui/Wrapper';
import Image from 'next/image';

export const Hiring = () => {
	return (
		<Section className='bg-secondary-white flex items-center justify-between'>
			<Image
				className='hidden md:block w-36 lg:w-48 xl:w-72 2xl:w-96'
				src='/svg/hiringLeft.svg'
				alt='Employee icon'
				width={500}
				height={500}
			/>
			<Wrapper className='flex flex-col items-center justify-between'>
				<div className='w-full flex justify-between items-center md:hidden'>
					<Image
						className='w-24 sm:w-36 '
						src='/svg/hiringLeft.svg'
						alt='Employee icon'
						width={500}
						height={500}
					/>
					<Image
						className='w-24 sm:w-36 '
						src='/svg/hiringRight.svg'
						alt='Employer icon'
						width={500}
						height={500}
					/>
				</div>
				<div className='mt-6 md:mt-0 w-full text-center max-w-xl'>
					<h2 className='text-primary-gray font-bold text-4xl md:text-5xl  text-center '>
						We are hiring!
					</h2>
					<p className='mt-4 text-lg md:text-xl  xl:text-2xl text-primary-orange font-bold'>
						We&apos;re always looking for talented people to join and help build our startups.Check
						out our current openings
					</p>
				</div>
			</Wrapper>
			<Image
				className='hidden md:block w-36 lg:w-48 xl:w-72 2xl:w-96'
				src='/svg/hiringRight.svg'
				alt='Employer icon'
				width={500}
				height={500}
			/>
		</Section>
	);
};
