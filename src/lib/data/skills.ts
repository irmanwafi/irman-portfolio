import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is a high-level, interpreted programming language known for its readability and versatility. I have experience using Python for data analysis, machine learning, and backend development.',
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'r',
		color: 'blue',
		description: 'R is a programming language and environment for statistical computing and graphics. I use R for data analytics, statistical modeling, and data visualization.',
		logo: Assets.Unknown,
		name: 'R',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'java',
		color: 'orange',
		description: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description: 'SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases.',
		logo: Assets.Unknown,
		name: 'SQL',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'dart',
		color: 'cyan',
		description: 'Dart is a client-optimized programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server, and web applications.',
		logo: Assets.Dart,
		name: 'Dart',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'vba',
		color: 'green',
		description: 'Visual Basic for Applications (VBA) is an implementation of Microsoft\'s event-driven programming language Visual Basic and its associated integrated development environment.',
		logo: Assets.Unknown,
		name: 'VBA',
		category: 'pro-lang'
	}),
	defineSkill({
		slug: 'powerbi',
		color: 'yellow',
		description: 'Power BI is a business analytics service by Microsoft that provides interactive visualizations and business intelligence capabilities.',
		logo: Assets.Unknown,
		name: 'Power BI',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker is a platform designed to make it easier to create, deploy, and run applications by using containers.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'tensorflow',
		color: 'orange',
		description: 'TensorFlow is an open-source software library for machine learning and artificial intelligence. It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.',
		logo: Assets.Unknown,
		name: 'TensorFlow',
		category: 'library'
	}),
	defineSkill({
		slug: 'msoffice',
		color: 'blue',
		description: 'Microsoft Office is a collection of productivity software developed by Microsoft, including Word, Excel, PowerPoint, and more.',
		logo: Assets.Unknown,
		name: 'Microsoft Office Suite',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'jupyter',
		color: 'orange',
		description: 'Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.',
		logo: Assets.Unknown,
		name: 'Jupyter Notebook',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'blue',
		description: 'Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring.',
		logo: Assets.Unknown,
		name: 'VS Code',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'indesign',
		color: 'pink',
		description: 'Adobe InDesign is a desktop publishing and typesetting software application produced by Adobe Inc. It can be used to create works such as posters, flyers, brochures, magazines, newspapers, presentations, books and ebooks.',
		logo: Assets.Unknown,
		name: 'Adobe InDesign',
		category: 'design'
	}),
	defineSkill({
		slug: 'matplotlib',
		color: 'blue',
		description: 'Matplotlib is a plotting library for the Python programming language and its numerical mathematics extension NumPy.',
		logo: Assets.Unknown,
		name: 'Matplotlib',
		category: 'library'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL is a free and open-source relational database management system emphasizing extensibility and SQL compliance.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'orange',
		description: 'MySQL is an open-source relational database management system.',
		logo: Assets.Unknown,
		name: 'MySQL',
		category: 'db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	}),
	defineSkill({
		slug: 'data-analytics',
		color: 'blue',
		description: 'Data Analytics involves examining data sets to draw conclusions about the information they contain. It includes using specialized systems and software to analyze data.',
		logo: Assets.Unknown,
		name: 'Data Analytics',
		category: 'soft'
	}),
	defineSkill({
		slug: 'data-visualization',
		color: 'green',
		description: 'Data visualization is the graphical representation of information and data. It includes using visual elements like charts, graphs, and maps to see and understand trends, outliers, and patterns in data.',
		logo: Assets.Unknown,
		name: 'Data Visualization',
		category: 'soft'
	}),
	defineSkill({
		slug: 'software-dev',
		color: 'purple',
		description: 'Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.',
		logo: Assets.Unknown,
		name: 'Software Development',
		category: 'soft'
	}),
	defineSkill({
		slug: 'machine-learning',
		color: 'blue',
		description: 'Machine learning is a subfield of artificial intelligence (AI) that focuses on building applications that learn from data and improve their accuracy over time without being programmed to do so.',
		logo: Assets.Unknown,
		name: 'Machine Learning',
		category: 'soft'
	}),
	defineSkill({
		slug: 'agile',
		color: 'cyan',
		description: 'Agile is an approach to software development and project management that emphasizes iterative development, team collaboration, and flexibility in the face of changing requirements.',
		logo: Assets.Unknown,
		name: 'Agile',
		category: 'soft'
	}),
	defineSkill({
		slug: 'cloud-computing',
		color: 'blue',
		description: 'Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet to offer faster innovation, flexible resources, and economies of scale.',
		logo: Assets.AWS,
		name: 'Cloud Computing',
		category: 'soft'
	}),
	defineSkill({
		slug: 'qgis',
		color: 'green',
		description: 'QGIS is a free and open-source cross-platform desktop geographic information system application that supports viewing, editing, and analysis of geospatial data.',
		logo: Assets.Unknown,
		name: 'QGIS',
		category: 'devtools'
	}),
	defineSkill({
		slug: 'streamlit',
		color: 'red',
		description: 'Streamlit is an open-source app framework for Machine Learning and Data Science teams. It enables the creation of web apps in Python.',
		logo: Assets.Unknown,
		name: 'Streamlit',
		category: 'framework'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
