import { Variants } from 'framer-motion';

export const fade: Variants = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.7,
			when: 'beforeChildren',
			staggerChildren: 0.4,
			ease: 'easeOut',
		},
	},
};

export const goUpAnim: Variants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	show: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};
