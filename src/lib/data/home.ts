import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `Irman Wafi,`,	description: `I'm a software developer experienced in data analysis, system development, and dashboard reporting. I've worked with PETRONAS, DOSM, and AGA Touch on full-stack apps, database optimization, and open-source deployments. I enjoy solving real-world problems and turning data into insights. This portfolio highlights my journey and projects.`,
	links: 
	[
		{ label: 'GitHub', href: 'https://github.com/irmanwafi', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/irmanwafi', icon: 'i-carbon-logo-linkedin' },
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
