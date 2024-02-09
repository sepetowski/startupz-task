import { Section } from '@/components/ui/Section';
import { Wrapper } from '@/components/ui/Wrapper';
import Image from 'next/image';
import React from 'react';

export const SolvingProblems = () => {
	return (
		<Section>
			<Wrapper className='flex justify-center items-end gap-2 md:gap-8 text-center'>
				<Image
					className='object-contain w-10 md:w-16'
					src={'/svg/thumbRight.svg'}
					alt=''
					width={80}
					height={80}
				/>
				<h2 className='text-xl sm:text-2xl md:text-3xl  lg:text-[2.5rem] text-primary-orange font-bold'>
					We love solving problems!
				</h2>
				<Image
					className='object-contain w-10 md:w-16'
					src={'/svg/thumbLeft.svg'}
					alt=''
					width={80}
					height={80}
				/>
			</Wrapper>
		</Section>
	);
};
