import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'primary-white': '#FFF',
				'secondary-white': '#FBFAFA',
				'primary-gray': '#3D4F5C',
				'secondary-gray': '#939393',
				'primary-orange': '#FB8958',
				'secondary-orange': '#FFC351',
				'primary-blue': '#46B8C8',
				'secondary-blue': '#8BB5C9',
				'third-blue': '#00A0B6',
				'primary-green': '#A9BC87',
				'primary-purple': '#8B60D3',
			},
		},
	},
	plugins: [],
};
export default config;
