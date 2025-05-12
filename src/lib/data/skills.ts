import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Languages', slug: 'languages' }),
	defineSkillCategory({ name: 'Databases', slug: 'databases' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'frameworks' }),
	defineSkillCategory({ name: 'Platform & Services', slug: 'platforms' }),
	defineSkillCategory({ name: 'Tools', slug: 'tools' })
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
	// Languages
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is a high-level, interpreted programming language. I use it for data analysis, machine learning, and backend development.',
		logo: Assets.Python,
		name: 'Python',
		category: 'languages'
	}),
	defineSkill({
		slug: 'r',
		color: 'blue',
		description: 'R is a programming language specialized for statistical computing and data visualization.',
		logo: Assets.R,
		name: 'R',
		category: 'languages'
	}),
	defineSkill({
		slug: 'sql',
		color: 'blue',
		description: 'SQL (Structured Query Language) is used for managing and querying relational databases.',
		logo: Assets.MySQL,
		name: 'SQL',
		category: 'languages'
	}),
	defineSkill({
		slug: 'vba',
		color: 'green',
		description: 'Visual Basic for Applications (VBA) for automation and extending Microsoft Office applications.',
		logo: Assets.VBA,
		name: 'VBA',
		category: 'languages'
	}),
	defineSkill({
		slug: 'javascript',
		color: 'yellow',
		description: 'JavaScript for web development and interactive applications.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'languages'
	}),
	defineSkill({
		slug: 'html',
		color: 'orange',
		description: 'HTML (HyperText Markup Language) for structuring web content.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'languages'
	}),
	defineSkill({
		slug: 'css',
		color: 'blue',
		description: 'CSS (Cascading Style Sheets) for styling web applications.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'languages'
	}),

	// Databases
	defineSkill({
		slug: 'mysql',
		color: 'orange',
		description: 'MySQL open-source relational database system.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'databases'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL advanced open-source relational database.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'databases'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'MongoDB NoSQL database for flexible, document-based data storage.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'databases'
	}),

	// Frameworks
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'Svelte is a modern JavaScript framework for building user interfaces.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'frameworks'
	}),
	defineSkill({
		slug: 'scikit-learn',
		color: 'blue',
		description: 'scikit-learn is a machine learning library for Python.',
		logo: Assets.ScikitLearn,
		name: 'scikit-learn',
		category: 'frameworks'
	}),
	defineSkill({
		slug: 'tailwind',
		color: 'cyan',
		description: 'Tailwind CSS is a utility-first CSS framework.',
		logo: Assets.Tailwind,
		name: 'Tailwind',
		category: 'frameworks'
	}),

	// Platform & Services
	defineSkill({
		slug: 'cloudflare',
		color: 'orange',
		description: 'Cloudflare for web security, performance, and hosting.',
		logo: Assets.Cloudflare,
		name: 'Cloudflare',
		category: 'platforms'
	}),
	defineSkill({
		slug: 'supabase',
		color: 'green',
		description: 'Supabase is an open source Firebase alternative.',
		logo: Assets.Supabase,
		name: 'Supabase',
		category: 'platforms'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker for containerization and application deployment.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'platforms'
	}),
	defineSkill({
		slug: 'powerbi',
		color: 'yellow',
		description: 'Power BI for business intelligence and data visualization.',
		logo: Assets.PowerBI,
		name: 'Power BI',
		category: 'platforms'
	}),
	defineSkill({
		slug: 'metabase',
		color: 'blue',
		description: 'Metabase for business intelligence and data visualization.',
		logo: Assets.Metabase,
		name: 'Metabase',
		category: 'platforms'
	}),
	defineSkill({
		slug: 'ollama',
		color: 'purple',
		description: 'Ollama for running large language models locally.',
		logo: Assets.Ollama,
		name: 'Ollama',
		category: 'platforms'
	}),

	// Tools
	defineSkill({
		slug: 'github',
		color: 'gray',
		description: 'GitHub for version control and collaboration.',
		logo: Assets.GitHub,
		name: 'GitHub',
		category: 'tools'
	}),
	defineSkill({
		slug: 'gitlab',
		color: 'orange',
		description: 'GitLab for version control and CI/CD pipelines.',
		logo: Assets.GitLab,
		name: 'GitLab',
		category: 'tools'
	}),
	defineSkill({
		slug: 'vscode',
		color: 'blue',
		description: 'Visual Studio Code for code editing and development.',
		logo: Assets.VSCode,
		name: 'VS Code',
		category: 'tools'
	}),
	defineSkill({
		slug: 'figma',
		color: 'purple',
		description: 'Figma for UI/UX design and prototyping.',
		logo: Assets.Figma,
		name: 'Figma',
		category: 'tools'
	}),
	defineSkill({
		slug: 'obsidian',
		color: 'purple',
		description: 'Obsidian for knowledge management and note-taking.',
		logo: Assets.Obsidian,
		name: 'Obsidian',
		category: 'tools'
	}),
	defineSkill({
		slug: 'dbeaver',
		color: 'brown',
		description: 'DBeaver for database administration and development.',
		logo: Assets.DBeaver,
		name: 'DBeaver',
		category: 'tools'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;
