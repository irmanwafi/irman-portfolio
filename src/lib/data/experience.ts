import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'aga-touch',
		company: 'AGA Touch (M) Sdn. Bhd',
		description: 'Deployed open-source LLMs (OpenWebUI, Ollama) for internal use. Built and deployed full-stack web apps using Svelte for dynamic UIs, integrating ShadCN and custom D3.js data visualizations. Deployed web applications on Cloudflare, optimizing CDN performance. Optimized MySQL databases with Bash and DBeaver, improving query performance, indexing, and data integration.',
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Bukit Rimau, Shah Alam',
		period: { from: new Date(2025, 0, 1) },
		skills: getSkills('svelte', 'mysql', 'typescript', 'cloudflare'),
		name: 'Software Developer | Executive',
		color: '#1E90FF',
		links: [],
		logo: Assets.Aga,
		shortDescription: 'Built full-stack Svelte apps with LLM integration and database optimization.'
	},
	{
		slug: 'dosm-data-analyst',
		company: 'Department of Statistics Malaysia (DOSM)',
		description: 'Developed VBA macros to automate repetitive tasks, reducing manual effort by 40% and improving team productivity. Streamlined KDNK book production processes using MS Publisher, resulting in more efficient workflow and reduced processing time.',
		contract: ContractType.Contract,
		type: 'Government',
		location: 'DOSM, Complex C, Putrajaya',
		period: { from: new Date(2024, 5, 1), to: new Date(2024, 11, 31) },
		skills: getSkills('vba', 'msoffice', 'data-analytics'),
		name: 'Data Analyst | MySTEP E41',
		color: '#4682B4',
		links: [],
		logo: Assets.Dosm,
		shortDescription: 'Automated VBA processes and streamlined KDNK book production.'
	},
	{
		slug: 'petronas-protege',
		company: 'PETRONAS Carigali (PCSB)',
		description: 'Led seven (7) Power BI projects to create data visualizations for business intelligence. Served as an accelerator for 47 Malaysia Petroleum Management (MPM) digital projects, involving both CapEx and OpEx endeavors. Developed content for PETRONAS UPX, contributing to video production and digital transformation initiatives.',
		contract: ContractType.Protege,
		type: 'Energy/Oil & Gas',
		location: 'Upstream Digital, Twin Towers, Kuala Lumpur',
		period: { from: new Date(2023, 4, 1), to: new Date(2024, 4, 31) },
		skills: getSkills('powerbi', 'data-analytics', 'data-visualization'),
		name: 'Digital Accelerator | Protégé',
		color: '#008000',
		links: [],
		logo: Assets.Petronas,
		shortDescription: 'Led Power BI projects and accelerated 47 digital transformation initiatives.'
	},
	{
		slug: 'sigma-rectrix',
		company: 'Sigma Rectrix Systems (M)',
		description: 'Developed a receipt feature in a Flutter-based Android app, enhancing mobile functionality. Set up Docker for project containerization and deployment, ensuring consistent development environments. Gained hands-on experience in troubleshooting Odoo CRM with PyCharm, improving system reliability.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'CBD Perdana 2, Cyberjaya',
		period: { from: new Date(2022, 8, 1), to: new Date(2023, 1, 28) },
		skills: getSkills('docker', 'flutter', 'python'),
		name: 'Software Analyst | Internship',
		color: '#A52A2A',
		links: [],
		logo: Assets.Sigma,
		shortDescription: 'Developed Flutter app features and implemented Docker containerization.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
