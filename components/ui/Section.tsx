import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Section = ({ children, className }: Props) => {
	return (
		<section className={cn('py-20 md:py-32  bg-primary-white', className)}>{children}</section>
	);
};
