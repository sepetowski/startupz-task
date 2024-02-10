import { Section } from '@/components/ui/Section';
import { Wrapper } from '@/components/ui/Wrapper';
import Image from 'next/image';
import React from 'react';

interface Props {
	text: string;
	center?: boolean;
}

export const ThumbsUp = ({ text, center }: Props) => {
	return (
		<Wrapper
			className={`flex justify-center gap-2 md:gap-8 text-center ${
				center ? 'items-center' : 'items-end'
			}`}>
			<Image
				className='object-contain w-10 md:w-16'
				src={'/svg/thumbRight.svg'}
				alt=''
				width={80}
				height={80}
			/>
			<h2 className='text-xl sm:text-2xl md:text-3xl  lg:text-4xl text-primary-orange font-bold max-w-6xl'>
				{text}
			</h2>
			<Image
				className='object-contain w-10 md:w-16'
				src={'/svg/thumbLeft.svg'}
				alt=''
				width={80}
				height={80}
			/>
		</Wrapper>
	);
};
