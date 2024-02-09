import { QuestionMark } from '@/components/svg/QuestionMark';
import { Wrapper } from '@/components/ui/Wrapper';
import React from 'react';
import { WhoWeAreDescription } from './WhoWeAreDescription';
import { WHO_WE_ARE_DESCRIPTIONS } from '@/lib/constants';
import { Section } from '@/components/ui/Section';

export const WhoWeAreSection = () => {
	return (
		<Section className='bg-secondary-white'>
			<Wrapper>
				<div className=' flex justify-between items-center'>
					<div className='w-2/3'>
						<h2 className='text-primary-gray font-bold text-4xl md:text-5xl  lg:text-6xl'>
							Who we are
						</h2>
						<p className='my-6 text-lg md:text-xl  xl:text-2xl text-primary-orange font-bold'>
							We create products that have innovation and technology at their core. We value working
							with talented people that understand the possibilities of today.
						</p>
					</div>
					<QuestionMark />
				</div>
				<div className='mt-10 md:mt-12 flex flex-col items-start md:flex-row md:items-center gap-10 md:gap-4 lg:gap-10 '>
					{WHO_WE_ARE_DESCRIPTIONS.map((whoWeAreItem) => (
						<WhoWeAreDescription
							key={whoWeAreItem.countNumber}
							countNumber={whoWeAreItem.countNumber}
							desc={whoWeAreItem.desc}
						/>
					))}
				</div>
			</Wrapper>
		</Section>
	);
};
