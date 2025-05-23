import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';

const items: Array<Project> = [
	{
		slug: 'geospatial-text-mining',
		color: '#4169E1',
		description:
			'A final year project focused on geospatial text mining. Used QGIS and Python to analyze over 15,000 geotagged tweets. Built a user-friendly frontend interface using Streamlit (called GEOSEL) to visualize the results. Implemented various machine learning models including Support Vector Machines (SVM), Random Forest (RF), and XGBoost for classification tasks.',
		shortDescription:
			'Geospatial text mining project analyzing 15,000+ geotagged tweets with QGIS and Python. Built Streamlit frontend (GEOSEL) with SVM, RF, and XGBoost models.',
		links: [
			{ to: 'https://github.com/irmanwafi', label: 'GitHub' }
		],
		logo: Assets.Python,
		name: 'Geospatial Text Mining',
		period: {
			from: new Date(2023, 8, 1),
			to: new Date(2024, 3, 30)
		},
		skills: getSkills('python', 'qgis', 'machine-learning', 'streamlit', 'data-analytics', 'data-visualization'),
		type: 'Academic Project',
		screenshots: [
			{
				label: 'GEOSEL Interface',
				src: 'https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'snake-game-genetic-algorithm',
		color: '#00FF00',
		description:
			'Developed a Snake Game AI using genetic algorithms to optimize gameplay. The project implements key evolutionary computing concepts including selection, crossover, and mutation to evolve intelligent snake agents. Created in Python, the AI learns to navigate the game environment efficiently, collect food, and avoid obstacles.',
		shortDescription:
			'Python project implementing a genetic algorithm (selection, crossover, mutation) to optimize Snake Game AI performance.',
		links: [
			{ to: 'https://github.com/irmanwafi', label: 'GitHub' }
		],
		logo: Assets.Python,
		name: 'Snake Game (Genetic Algorithm)',
		period: {
			from: new Date(2023, 5, 1),
			to: new Date(2023, 7, 30)
		},
		skills: getSkills('python', 'machine-learning'),
		type: 'Personal Project',
		screenshots: [
			{
				label: 'Snake Game',
				src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'neural-network-cnn',
		color: '#FF6347',
		description:
			'Created a Convolutional Neural Network (CNN) using TensorFlow for image classification tasks. The project included preprocessing and augmentation of image datasets to improve model performance. Implemented multiple layers including convolutional, pooling, and fully connected layers for effective feature extraction and classification.',
		shortDescription:
			'Image classification project using TensorFlow CNN with proper preprocessing techniques.',
		links: [
			{ to: 'https://github.com/irmanwafi', label: 'GitHub' }
		],
		logo: Assets.Unknown,
		name: 'Neural Network CNN',
		period: {
			from: new Date(2023, 2, 1),
			to: new Date(2023, 4, 30)
		},
		skills: getSkills('python', 'tensorflow', 'machine-learning'),
		type: 'Academic Project',
		screenshots: [
			{
				label: 'CNN Architecture',
				src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV1cmFsJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
