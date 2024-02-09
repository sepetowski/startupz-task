import React from 'react';
import Link from 'next/link';
import { LogoSvg } from '@/components/svg/LogoSvg';

export const Logo = () => {
	return (
		<Link href='/' className='w-40 h-10 md:w-52 md:h-12 p-1.5'>
			<LogoSvg />
		</Link>
	);
};
