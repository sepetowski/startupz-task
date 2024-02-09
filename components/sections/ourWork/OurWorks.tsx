import { Section } from '@/components/ui/Section';
import { ThumbsUp } from '@/components/ui/ThumbsUp';
import { Wrapper } from '@/components/ui/Wrapper';
import React from 'react';
import { WorkCard } from './WorkCard';
import { OUR_WORKS } from '@/lib/constants';

export const OurWorks = () => {
	return (
		<Section>
			<Wrapper className='mb-40'>
				<h2 className='text-primary-gray font-bold text-4xl md:text-5xl  lg:text-6xl text-center mb-14'>
					Our works
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
					{OUR_WORKS.map((work, i) => (
						<WorkCard
							key={i}
							desc={work.desc}
							href={work.href}
							img={work.img}
							title={work.title}
							titleColor={work.titleColor}
						/>
					))}
				</div>
			</Wrapper>
			<ThumbsUp
				center
				text='Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.
'
			/>
		</Section>
	);
};
