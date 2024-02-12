'use client';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const Assistant = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) {
		return null;
	}

	return (
		<div className='fixed bottom-4 right-4 md:bottom-10 md:right-10 z-20 flex flex-col  items-end'>
			<div className=' flex justify-between items-start'>
				<div className='bg-primary-blue p-2 px-6 text-primary-white mb-1 mr-10 w-fit shadow-lg  text-xs md:text-sm rounded-[2rem] rounded-br-none'>
					<p>Hi! I am Ben, your virtual assistant.</p>
					<p>How can I make your day better?</p>
				</div>
				<button
					onClick={() => {
						setIsVisible(false);
					}}>
					<X />
				</button>
			</div>
			<div className=' p-1.5 shadow-lg rounded-full bg-primary-white '>
				<Image
					className='rounded-full object-cover w-12 h-12 md:w-14 md:h-14'
					src={'/svg/assistant.svg'}
					alt='assistant icon'
					width={50}
					height={50}
				/>
			</div>
		</div>
	);
};
