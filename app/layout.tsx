import type { Metadata } from 'next';
import { circularStd } from '@/fonts/fonts';
import { Nav } from '@/components/nav/Nav';
import { Footer } from '@/components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { NavShadowProvider } from '@/store/NavShadowContext';
import { Assistant } from '@/components/assistant/Assistant';

export const metadata: Metadata = {
	title: 'Startupz',
	description: 'We are startup studio that develops and launches new companies.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<NavShadowProvider>
				<body className={circularStd.className}>
					<ToastContainer />
					<Nav />
					{children}
					<Footer />
					<Assistant />
				</body>
			</NavShadowProvider>
		</html>
	);
}
