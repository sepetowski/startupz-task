import { Header } from '@/components/header/Header';
import { ThumbsUp } from '@/components/ui/ThumbsUp';
import { SectionWithPoints } from '@/components/sections/sectionWithPoints/SectionWithPoints';
import { OUR_CORE_VALUES, WHO_WE_ARE_DESCRIPTIONS } from '@/lib/constants';
import { Section } from '@/components/ui/Section';
import { OurWorks } from '@/components/sections/ourWork/OurWorks';
import { Hiring } from '@/components/sections/hiring/Hiring';
import { FormSection } from '@/components/sections/form/FormSection';

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<SectionWithPoints
					title='Who we are'
					desc='We create products that have innovation and technology at their core. We value working with talented people that understand the possibilities of today.'
					items={WHO_WE_ARE_DESCRIPTIONS}
					img={{
						alt: '',
						src: '/svg/questionMark.svg',
					}}
				/>
				<Section>
					<ThumbsUp text='We love solving problems!' />
				</Section>
				<SectionWithPoints
					title='Our core Values'
					items={OUR_CORE_VALUES}
					img={{
						alt: '',
						src: '/svg/lightBulb.svg',
					}}
				/>
				<OurWorks />
				<Hiring />
				<FormSection />
			</main>
		</>
	);
};

export default Home;
