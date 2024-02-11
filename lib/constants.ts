import { SectionPointItem, WorkCard } from '@/types/types';

export const WHO_WE_ARE_DESCRIPTIONS: SectionPointItem[] = [
	{ countNumber: '01', desc: 'We develop innovative products, systems and services' },
	{ countNumber: '02', desc: 'Next we build teams to scale them into companies' },
	{ countNumber: '03', desc: 'Each startup solving one problem at a time' },
];

export const OUR_CORE_VALUES: SectionPointItem[] = [
	{
		countNumber: '01. Innovation',
		desc: 'Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.',
	},
	{ countNumber: '02. People', desc: 'Talent is what enable us to create great companies.' },
];
export const OUR_WORKS: WorkCard[] = [
	{
		title: 'Tolq',
		titleColor: 'primary-green',
		desc: 'Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.',
		href: 'https://tolq.com',
		img: { alt: 'Tolq site on a laptop screen', src: '/svg/tolq.svg' },
	},
	{
		title: 'Feedback Labs',
		titleColor: 'secondary-blue',
		desc: 'Feedback Labs turns feedback into actionable insights for your team.',
		href: 'https://feedbacklabs.org',
		img: { alt: 'Feedback Labs site on a laptop screen', src: '/svg/feedbackLabs.svg' },
	},
	{
		title: 'Codekeeper',
		titleColor: 'third-blue',
		desc: 'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.',
		href: 'https://codekeeper.co',
		img: { alt: 'Codekeeper site on a laptop screen', src: '/svg/codeKeeper.svg' },
	},
	{
		title: 'LegalSite',
		titleColor: 'primary-purple',
		desc: 'Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.',
		href: 'https://legalsite.co',
		img: { alt: 'LegalSite site on a laptop screen', src: '/svg/legalSite.svg' },
	},
];
