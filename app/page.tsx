import { Header } from '@/components/header/Header';
import { SolvingProblems } from '@/components/sections/solving-problems/SolvingProblems';
import { WhoWeAreSection } from '@/components/sections/who-we-are/WhoWeAreSection';

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<WhoWeAreSection />
				<SolvingProblems />
			</main>
		</>
	);
};

export default Home;
