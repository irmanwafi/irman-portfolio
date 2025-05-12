import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [
	{
		degree: 'Bachelor of Information Systems (Hons.) Intelligent Systems Engineering',
		description: 'Studied various aspects of intelligent systems engineering, including machine learning, data mining, object-oriented programming, and intelligent systems design. Achieved a GPA of 3.67.',
		location: 'Shah Alam',
		logo: Assets.UiTM,
		name: 'Computer Science and Information Systems',
		organization: 'Universiti Teknologi MARA (UiTM)',
		period: { from: new Date(2020, 8, 1), to: new Date(2024, 8, 1) },
		shortDescription: 'Bachelor\'s degree in Intelligent Systems Engineering with focus on machine learning and data analytics.',
		slug: 'uitm-shah-alam',
		subjects: [
			'Machine Learning',
			'Data Mining',
			'Object-Oriented Programming',
			'Ai Programming Paradigm',
			'Intelligent Systems Development',
			'Python',
			'R'
		],
		color: 'navy' // Added color
	},
	{
		degree: 'Selangor Matriculation College',
		description: 'Completed foundation studies in Computer Science, building a strong base in mathematics, programming, and computer fundamentals.',
		location: 'Banting',
		logo: Assets.Matrikulasi,
		name: 'Computer Science Foundation',
		organization: 'KMS, Jugra',
		period: { from: new Date(2019, 6, 1), to: new Date(2020, 5, 1) },
		shortDescription: 'Matriculation program in Computer Science Module 2 with emphasis on mathematics and programming fundamentals.',
		slug: 'selangor-matriculation',
		subjects: ['Mathematics', 'Computer Programming', 'Physics', 'Chemistry', 'JAVA', 'C++'],
		color: 'royalblue' // Added color
	},
	{
		degree: 'SMK Bandar Baru Salak Tinggi',
		description: 'Completed secondary education with a focus on engineering drawing and technical subjects.',
		location: 'Sepang',
		logo: Assets.SMKBBST,
		name: 'Secondary Education',
		organization: 'Bandar Baru Salak Tinggi',
		period: { from: new Date(2014, 0, 1), to: new Date(2018, 11, 31) },
		shortDescription: 'Secondary education with focus on engineering drawing.',
		slug: 'smk-salak-tinggi',
		subjects: ['Engineering Drawing', 'Mathematics', 'Physics', 'Chemistry', 'AutoCAD', 'Technical Drawing'],
		color: 'steelblue' // Added color
	}
];

const EducationData = { title, items };

export default EducationData;
