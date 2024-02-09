import { WhoWeAreItem } from '@/types/types';
import React from 'react';

interface Props extends WhoWeAreItem {}

export const WhoWeAreDescription = ({ countNumber, desc }: Props) => {
	return (
		<div>
			<h3 className='mb-3 md:mb-4  text-xl md:text-2xl  lg:text-3xl text-primary-orange font-bold'>
				{countNumber}
			</h3>
			<hr className='w-12 md:w-16 border-primary-gray block mb-6 md:mb-8'></hr>
			<p className='text-xl md:text-2xl  lg:text-3xl text-primary-gray font-bold'>{desc}</p>
		</div>
	);
};
