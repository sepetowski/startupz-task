'use client';
import React from 'react';

import { Section } from '@/components/ui/Section';
import { Wrapper } from '@/components/ui/Wrapper';
import { motion } from 'framer-motion';
import { goUpAnim } from '@/animations/animations';
import Image from 'next/image';
import { CustomLink } from '@/components/ui/CustomLink';

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
					<motion.h2
						variants={goUpAnim}
						className='text-primary-gray font-bold text-4xl md:text-5xl  text-center '>
						We are hiring!
					</motion.h2>
					<motion.div
						variants={goUpAnim}
						className='my-4 md:my-6 text-lg md:text-xl  xl:text-2xl text-primary-orange font-bold'>
						<p>We&apos;re always looking for talented people</p>
						<p>to join and help build our startups.</p>
						<p>Check out our current openings</p>
					</motion.div>
					<CustomLink variant={'primary'} href='/jobs'>
						See current openings
					</CustomLink>
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
