'use client';
import React from 'react';

import { Wrapper } from '@/components/ui/Wrapper';
import { Section } from '@/components/ui/Section';
import { SectionPointItem } from './SectionPointItem';
import { SectionPointItem as SectionPointItemI } from '@/types/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fade, goUpAnim } from '@/animations/animations';

interface Props {
	items: SectionPointItemI[];
	desc?: string;
	title: string;
	img: {
		src: string;
		alt: string;
	};
}

export const SectionWithPoints = ({ items, title, desc, img: { alt, src } }: Props) => {
	return (
		<Section className='bg-secondary-white'>
			<Wrapper>
				<div className=' flex justify-between items-center '>
					<div className='w-2/3 mb-6'>
						<motion.h2
							variants={goUpAnim}
							className='text-primary-gray font-bold text-4xl md:text-5xl  lg:text-6xl'>
							{title}
						</motion.h2>
						{desc && (
							<motion.p
								variants={goUpAnim}
								className='mt-6 text-lg md:text-xl  xl:text-2xl text-primary-orange font-bold'>
								{desc}
							</motion.p>
						)}
					</div>
					<motion.div variants={fade}>
						<Image className='w-14 md:w-20' src={src} alt={alt} width={80} height={80} />
					</motion.div>
				</div>
				<motion.div
					variants={fade}
					className='mt-10 md:mt-12 flex flex-col items-start md:flex-row md:items-start  gap-10 md:gap-4 lg:gap-12 '>
					{items.map((item) => (
						<SectionPointItem
							key={item.countNumber}
							countNumber={item.countNumber}
							desc={item.desc}
							equal={items.length == 2}
						/>
					))}
				</motion.div>
			</Wrapper>
		</Section>
	);
};
