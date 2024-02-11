'use client';
import React, { useEffect, useState } from 'react';

import { Logo } from '@/components/ui/Logo';
import { CustomLink } from '@/components/ui/CustomLink';
import { Wrapper } from '@/components/ui/Wrapper';
import { MobileNav } from './MobileNav';
import { Menu } from 'lucide-react';
import { useMediaQuery } from '@react-hook/media-query';

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isSmallScreen = useMediaQuery('(max-width: 1024px)');

	const onCloseNav = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (isOpen && isSmallScreen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isOpen, isSmallScreen]);

	return (
		<nav className='w-full fixed top-0 left-0 bg-primary-white z-50 shadow-sm'>
			<Wrapper className='flex justify-between items-center py-4 '>
				<Logo />
				<div className='hidden lg:flex items-center gap-6 '>
					<CustomLink className='p-0' variant={'default'} href='#startups'>
						Startups
					</CustomLink>
					<CustomLink className='p-0' variant={'default'} href='#contact'>
						Contact
					</CustomLink>
					<CustomLink variant={'outline'} size={'lg'} href='/work-with-us'>
						Work with us!
					</CustomLink>
				</div>
				<button
					onClick={() => {
						setIsOpen(true);
					}}
					className='lg:hidden'>
					<Menu />
				</button>
			</Wrapper>
			<MobileNav isOpen={isOpen} onClose={onCloseNav} />
		</nav>
	);
};
