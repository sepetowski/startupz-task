'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavShadowContext } from '@/store/NavShadowContext';
import { cn } from '@/lib/utils';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const HeaderWrapper = ({ children, className }: Props) => {
	const [element, view] = useInView({ threshold: 0.75 });
	const { toggleShadow } = useNavShadowContext();

	useEffect(() => {
		if (view) toggleShadow(false);
		else toggleShadow(true);
	}, [view, toggleShadow]);

	return (
		<header ref={element} className={cn('relative', className)}>
			{children}
		</header>
	);
};
