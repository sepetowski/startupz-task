'use client';
import React from 'react';

import { Wrapper } from '@/components/ui/Wrapper';
import { motion } from 'framer-motion';
import { fade, goUpAnim } from '@/animations/animations';
import Image from 'next/image';

interface Props {
	text: string;
	center?: boolean;
}

export const ThumbsUp = ({ text, center }: Props) => {
	return (
		<Wrapper>
			<motion.div
				variants={fade}
				className={`w-full flex justify-center gap-2 md:gap-8 text-center ${
					center ? 'items-center' : 'items-end'
				}`}>
				<Image
					className='object-contain w-10 md:w-16'
					src={'/svg/thumbRight.svg'}
					alt='Thumb up icon'
					width={80}
					height={80}
				/>
				<motion.h2
					variants={goUpAnim}
					className='text-xl sm:text-2xl md:text-3xl  lg:text-4xl text-primary-orange font-bold max-w-6xl'>
					{text}
				</motion.h2>
				<Image
					className='object-contain w-10 md:w-16'
					src={'/svg/thumbLeft.svg'}
					alt='Thumb up icon'
					width={80}
					height={80}
				/>
			</motion.div>
		</Wrapper>
	);
};
