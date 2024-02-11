import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
	id?: string;
	children: React.ReactNode;
	className?: string;
}

export const Section = ({ children, className, id }: Props) => {
	return (
		<section id={id} className={cn('py-20 md:py-32  bg-primary-white', className)}>
			{children}
		</section>
	);
};
