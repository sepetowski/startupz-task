'use client';
import React from 'react';

import { X } from 'lucide-react';
import { CustomLink } from '@/components/ui/CustomLink';
import { Logo } from '@/components/ui/Logo';

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export const MobileNav = ({ isOpen, onClose }: Props) => {
	return (
		<>
			<div
				className={`lg:hidden top-0 right-0 fixed z-50 w-[80%] sm:w-[65%] max-w-sm h-screen bg-secondary-white  shadow-md flex flex-col gap-4 items-start  p-4 transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-[100%]'
				}`}>
				<div className='text-3xl w-full flex justify-between items-center mt-4'>
					<Logo onClick={onClose} />
					<button onClick={onClose} className='p-1.5'>
						<X />
					</button>
				</div>
				<hr className='w-full block border-primary-gray my-4'></hr>
				<CustomLink
					onClick={onClose}
					className='p-0 md:p-0 font-bold text-lg sm:text-xl'
					size={'lg'}
					variant={'default'}
					href='/#startups'>
					Startups
				</CustomLink>
				<CustomLink
					onClick={onClose}
					className='p-0 md:p-0 font-bold text-lg sm:text-xl'
					size={'lg'}
					variant={'default'}
					href='/#contact'>
					Contact
				</CustomLink>
				<CustomLink
					onClick={onClose}
					className='p-0 md:p-0 font-bold text-lg sm:text-xl'
					size={'lg'}
					variant={'default'}
					href='/work-with-us'>
					Work with us!
				</CustomLink>
			</div>
			{isOpen && (
				<div
					onClick={onClose}
					className=' lg:hidden top-0 left-0 fixed z-30 w-full h-screen bg-black/80'></div>
			)}
		</>
	);
};
