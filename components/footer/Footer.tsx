import React from 'react';

import { Wrapper } from '@/components/ui/Wrapper';
import { Logo } from '@/components/ui/Logo';
import { CustomLink } from '@/components/ui/CustomLink';
import Image from 'next/image';

export const Footer = () => {
	return (
		<footer>
			<Wrapper className='py-8 md:py-16 flex flex-col md:flex-row justify-between items-start '>
				<div className='flex flex-col  mb-8 md:mb-0  md:justify-between md:h-44 px-2 '>
					<Logo className='p-0 mt-[-1rem] sm:w-40 sm:h-9 md:w-44 md:h-10 lg:w-52 lg:h-12' />
					<div className='text-secondary-gray mt-4 md:mt-0'>
						<p>© 2020 Startupz.</p>
						<p>All rights reserved. </p>
					</div>
				</div>

				<div className='flex flex-col mb-8 md:mb-0 md:justify-between md:h-44 px-2'>
					<h3 className='mb-2 font-bold text-primary-gray  '>Companies</h3>
					<div className='flex flex-col items-start'>
						<CustomLink href='/' className='text-primary-blue px-0' size={'sm'}>
							Tolq
						</CustomLink>
						<CustomLink href='/' className='text-primary-blue px-0' size={'sm'}>
							LegalSite
						</CustomLink>
						<CustomLink href='/' className='text-primary-blue px-0' size={'sm'}>
							Codekeeper
						</CustomLink>
						<CustomLink href='/' className='text-primary-blue px-0' size={'sm'}>
							Feedback Labs
						</CustomLink>
					</div>
				</div>
				<div className='flex flex-col items-start mb-8 md:mb-0 md:justify-between md:h-44 px-2'>
					<h3 className='mb-2 font-bold text-primary-gray  '>Contact</h3>

					<p className='text-secondary-gray max-w-sm '>
						World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM The Hague The
						Netherlands
					</p>

					<CustomLink href='/' className='text-primary-blue px-0' size={'sm'}>
						Send us an email
					</CustomLink>
				</div>
				<div className='flex flex-col px-2'>
					<h3 className='mb-2 font-bold text-primary-gray  '>Follow us</h3>
					<div className='flex flex-col gap-2 items-start'>
						<CustomLink href='/' className='text-primary-blue px-0' size={'sm'}>
							<Image
								className='w-6 h-6'
								src={'/svg/twitter.svg'}
								alt='twitter icon'
								width={50}
								height={50}
							/>
						</CustomLink>
						<CustomLink href='/' className='text-primary-blue px-0' size={'sm'}>
							<Image
								className='w-6 h-6'
								src={'/svg/linkedin.svg'}
								alt='linkedin icon'
								width={50}
								height={50}
							/>
						</CustomLink>
						<CustomLink href='/' className='text-primary-blue px-0' size={'sm'}>
							<Image
								className='w-6 h-6'
								src={'/svg/instagram.svg'}
								alt='instargram icon'
								width={50}
								height={50}
							/>
						</CustomLink>
					</div>
				</div>
			</Wrapper>
		</footer>
	);
};
