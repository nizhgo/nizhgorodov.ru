import type { Translations } from './types';

export const en: Translations = {
	meta: {
		title: 'Aleksey Nizhgorodov | Frontend Developer',
		description:
			'Frontend Developer. React, TypeScript, Svelte, Leaflet, maps, visualizations.'
	},
	hero: {
		name: 'Aleksey Nizhgorodov',
		bio: "3+ years in frontend. I enjoy the hard stuff most — Leaflet maps, data-heavy dashboards, visualizations. When off-the-shelf libraries can't keep up — I write my own."
	},
	projects: {
		title: 'Projects',
		items: [
			{
				title: 'Video Analytics Platform',
				description: 'Frontend architecture from scratch for a surveillance and analytics system',
				tags: ['TypeScript', 'React', 'MobX']
			},
			{
				title: 'Cartography & Monitoring',
				description:
					'Geozones, real-time tracks, timelines. Optimized rendering of thousands of markers',
				tags: ['Leaflet', 'WebGL', 'Canvas']
			},
			{
				title: 'PDF Generator',
				description:
					'Library for building reports from React components with WebGL map and chart rendering',
				tags: ['React', 'jsPDF', 'WebGL']
			},
			{
				title: 'Kids Task Tracker',
				description:
					'Gamified dashboard on a touch screen + PWA for parents',
				tags: ['React', 'PWA', 'WebSockets']
			}
		]
	},
	stack: {
		title: 'Stack',
		items: [
			'TypeScript',
			'React',
			'Svelte',
			'JavaScript',
			'Leaflet',
			'WebGL',
			'Canvas',
			'MobX',
			'Redux',
			'Tailwind',
			'Node.js',
			'Docker',
			'Nginx',
			'PostgreSQL',
			'Vitest',
			'Playwright',
			'QGIS'
		]
	},
	background: {
		title: 'Background',
		work: [
			{ place: 'Perfema', role: 'Frontend Developer', period: '2023 — now' },
			{ place: 'Yandex', role: 'Assessor Developer', period: '2023' }
		],
		education: [
			{ place: 'HSE', program: "Master's, Digital Urbanism", period: '2024 — now' },
			{ place: 'MISIS', program: "Bachelor's, IS&T", period: '2020 — 2024' }
		]
	},
	contacts: {
		title: 'Contacts'
	},
	footer: {
		copyright: 'Aleksey Nizhgorodov'
	}
};
