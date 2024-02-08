import React from 'react';
import { Logo } from './Logo';
import { CustomLink } from '../ui/CustomLink';

export const Nav = () => {
	return (
		<nav className='w-full fixed top-0 left-0 bg-primary-white'>
			<div className='w-full mx-auto max-w-screen-2xl flex justify-between items-center px-4 md:px-6 py-1.5 '>
				<Logo />
				<div className='flex items-center gap-6 '>
					<CustomLink name='Startups' className='p-0' variant={'default'} href='/' />
					<CustomLink name='Contact' className='p-0' variant={'default'} href='/' />
					<CustomLink name='Work with us!' variant={'outline'} size={'lg'} href='/' />
				</div>
			</div>
		</nav>
	);
};
