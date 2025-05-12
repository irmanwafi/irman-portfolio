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
	description: `Hi, I'm a software developer with experience in data analysis, system development, and dashboard reporting. I've worked on projects with PETRONAS, DOSM, and now AGA Touch, where I focus on building full-stack applications, optimizing databases, and deploying open-source tools. 
	I enjoy solving real-world problems, improving systems, and turning data into meaningful insights. This portfolio showcases my work, my journey, and the projects I've been proud to be part of. 
	Feel free to explore and see what I've been up to!`,
	links: [
		{ label: 'GitHub', href: 'https://github.com/irmanwafi', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/irmanwafi', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Portfolio', href: 'https://irmanwafi.website', icon: 'i-carbon-globe' },
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
