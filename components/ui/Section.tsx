'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { AnimationControls, motion } from 'framer-motion';
import { useScrollAnim } from '@/hooks/useScrollAnim';
import { fade } from '@/animations/animations';

interface Props {
	id?: string;
	children: React.ReactNode;
	className?: string;
}

export const Section = ({ children, className, id }: Props) => {
	const [section, sectionControlls] = useScrollAnim(0.2);

	return (
		<motion.section
			ref={section as React.Ref<HTMLDivElement> | undefined}
			variants={fade}
			animate={sectionControlls as AnimationControls}
			initial='hidden'
			id={id}
			className={cn('py-20 md:py-32  bg-primary-white', className)}>
			{children}
		</motion.section>
	);
};
