import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Props {
	className?: string;
}

export const Logo = ({ className }: Props) => {
	return (
		<Link href='/' className={cn('w-40 h-10 md:w-52 md:h-12 p-1.5', className)}>
			<Image src={'/svg/logo.svg'} alt='' width={200} height={200} />
		</Link>
	);
};
