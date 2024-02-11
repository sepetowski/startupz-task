'use client';
import React from 'react';

import { Section } from '@/components/ui/Section';
import { ThumbsUp } from '@/components/ui/ThumbsUp';
import { Wrapper } from '@/components/ui/Wrapper';
import { WorkCard } from './WorkCard';
import { OUR_WORKS } from '@/lib/constants';
import { motion } from 'framer-motion';
import { fade, goUpAnim } from '@/animations/animations';

export const OurWorks = () => {
	return (
		<Section id='startups'>
			<Wrapper className='mb-40'>
				<motion.h2
					variants={goUpAnim}
					className='text-primary-gray font-bold text-4xl md:text-5xl  text-center mb-14'>
					Our works
				</motion.h2>
				<motion.div variants={fade} className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
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
				</motion.div>
			</Wrapper>

			<ThumbsUp
				center
				text='Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.'
			/>
		</Section>
	);
};
