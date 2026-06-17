import type { Translations } from './types';

export const ru: Translations = {
	meta: {
		title: 'Алексей Нижгородов | Frontend Developer',
		description:
			'Frontend-разработчик. React, TypeScript, Svelte, Leaflet, карты, визуализации.'
	},
	hero: {
		name: 'Алексей Нижгородов',
		bio: 'Делаю фронтенд 3+ года. Больше всего кайфую от сложных штук — карты на Leaflet, дашборды с кучей данных, визуализации. Когда готовые библиотеки не справляются — пишу свои.'
	},
	projects: {
		title: 'Проекты',
		items: [
			{
				title: 'Платформа видеоаналитики',
				description: 'Архитектура фронтенда с нуля для системы видеонаблюдения и аналитики',
				tags: ['TypeScript', 'React', 'MobX']
			},
			{
				title: 'Картография и мониторинг',
				description:
					'Геозоны, реалтайм-треки, таймлайны. Оптимизация рендеринга тысяч маркеров',
				tags: ['Leaflet', 'WebGL', 'Canvas']
			},
			{
				title: 'PDF-генератор',
				description:
					'Библиотека для отчётов из React-компонентов с рендерингом WebGL-карт и графиков',
				tags: ['React', 'jsPDF', 'WebGL']
			},
			{
				title: 'Трекер задач для детей',
				description:
					'Геймифицированный дашборд на сенсорном экране + PWA для родителей',
				tags: ['React', 'PWA', 'WebSockets']
			}
		]
	},
	stack: {
		title: 'Стек',
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
		title: 'Бэкграунд',
		work: [
			{ place: 'Perfema', role: 'Frontend Developer', period: '2023 — н.в.' },
			{ place: 'Яндекс', role: 'Асессор-разработчик', period: '2023' }
		],
		education: [
			{ place: 'ВШЭ', program: 'Магистратура, Цифровая урбанистика', period: '2024 — н.в.' },
			{ place: 'МИСиС', program: 'Бакалавриат, ИСиТ', period: '2020 — 2024' }
		]
	},
	contacts: {
		title: 'Контакты'
	},
	footer: {
		copyright: 'Aleksey Nizhgorodov'
	}
};
