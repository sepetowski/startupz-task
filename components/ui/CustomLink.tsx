import React from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const linkVaraints = cva(
	'inline-flex items-center justify-center rounded-3xl transition-colors duration-200 text-lg',
	{
		variants: {
			variant: {
				default: 'hover:text-primary-blue text-primary-gray',
				primary:
					'text-primary-white bg-primary-blue font-bold hover:text-primary-blue hover:bg-primary-white border border-transparent hover:border-primary-blue transition-all',
				outline:
					'hover:text-primary-white hover:bg-primary-blue font-bold text-primary-blue bg-primary-white border border-primary-blue',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9  px-3',
				lg: 'h-11  px-8',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface LinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
		VariantProps<typeof linkVaraints> {
	href: string;
	name: string;
}

export const CustomLink = ({ className, variant, size, href, name, ...props }: LinkProps) => {
	return (
		<Link className={cn(linkVaraints({ variant, size, className }))} href={href} {...props}>
			{name}
		</Link>
	);
};
