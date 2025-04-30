import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `Irman Wafi,`,
	description:
		"Data Analyst and software enthusiast from Kuala Lumpur specializing in data visualization, analytics, and machine learning. Experienced in Python, R, SQL, and Power BI with a background in government and energy sectors. Recent Bachelor's graduate in Information Systems (Intelligent Systems Engineering) with a 3.67 GPA from UiTM Shah Alam. Passionate about finding meaningful insights in data and creating user-friendly data solutions.",
	links: [
		{ label: 'GitHub', href: 'https://github.com/irmanwafi', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/irmanwafi', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Portfolio', href: 'https://irmanwafi.site', icon: 'i-carbon-globe' },
		{ label: 'Email', href: 'mailto:irmanwafirosli@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
