import localFont from 'next/font/local';

export const circularStd = localFont({
	src: [
		{
			path: './circularStd/CircularStd-Book.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './circularStd/CircularStd-Medium.woff2',
			weight: '600',
			style: 'bold',
		},

		{
			path: './circularStd/CircularStd-Bold.woff2',
			weight: '700',
			style: 'bold',
		},
		{
			path: './circularStd/CircularStd-BookItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: './circularStd/CircularStd-MediumItalic.woff2',
			weight: '600',
			style: 'italic',
		},
		{
			path: './circularStd/CircularStd-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
	],
});
