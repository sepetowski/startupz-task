import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
	className?: string;
	onClick?: () => void;
}

export const Logo = ({ className, onClick }: Props) => {
	return (
		<Link onClick={onClick} href='/' className={cn('w-40 h-10 md:w-52 md:h-12 p-1.5', className)}>
			<Image
				fetchPriority='high'
				src={'/svg/logo.svg'}
				alt='Startupz logo'
				width={200}
				height={200}
			/>
		</Link>
	);
};
