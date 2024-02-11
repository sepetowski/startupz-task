import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Wrapper = ({ children, className }: Props) => {
	return (
		<div className={cn('w-full h-full mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-10', className)}>
			{children}
		</div>
	);
};
