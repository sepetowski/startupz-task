import { CustomLink } from '@/components/ui/CustomLink';
import { WorkCard as WorkCardI } from '@/types/types';
import Image from 'next/image';
import React, { useMemo } from 'react';

interface Props extends WorkCardI {}

export const WorkCard = ({ desc, href, img: { alt, src }, title, titleColor }: Props) => {
	const textColor = useMemo(() => {
		switch (titleColor) {
			case 'primary-green':
				return 'text-primary-green';
			case 'secondary-blue':
				return 'text-secondary-blue';
			case 'third-blue':
				return 'text-third-blue';
			case 'primary-purple':
				return 'text-primary-purple';
		}
	}, [titleColor]);

	return (
		<div className='flex flex-col items-center justify-between p-10 gap-4 bg-primary-white rounded-3xl border border-secondary-white shadow-md w-full h-full '>
			<div className=' text-center'>
				<h3 className={`mb-4 text-3xl font-bold ${textColor}`}>{title}</h3>
				<p className='text-primary-gray font-bold  max-w-lg'>{desc}</p>
			</div>

			<Image
				className='w-full h-48 md:h-64 object-contain my-4'
				alt={alt}
				src={src}
				width={800}
				height={800}
			/>
			<CustomLink variant={'outline'} size={'lg'} href={href}>
				More
			</CustomLink>
		</div>
	);
};
