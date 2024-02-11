import React from 'react';

import { Section } from '@/components/ui/Section';
import { Wrapper } from '@/components/ui/Wrapper';
import Image from 'next/image';
import { Form } from './Form';

export const FormSection = () => {
	return (
		<Section id='contact' className='bg-secondary-orange py-16 md:py-16 lg:py-16 overflow-hidden '>
			<Wrapper className='relative '>
				<div className='max-w-3xl'>
					<h2 className='text-primary-white font-bold text-4xl md:text-5xl    '>
						<span className='inline-block'>Are you ready </span>
						<span className='inline-block'>to board this rocket ship?</span>
					</h2>
					<p className='mt-1 md:mt-4 text-lg md:text-xl  xl:text-2xl text-primary-white '>
						Share your excitement with us.
					</p>
				</div>
				<Form />
				<Image
					className='absolute bottom-[-10%] right-10 hidden md:block md:w-1/3 lg:w-1/2 '
					src={'/svg/rocket.svg'}
					alt='rocket'
					width={800}
					height={800}
				/>
			</Wrapper>
		</Section>
	);
};
