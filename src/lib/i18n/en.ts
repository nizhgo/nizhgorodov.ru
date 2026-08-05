import type { Translations } from './types';

export const en: Translations = {
	meta: {
		title: 'Aleksei Nizhgorodov | Frontend Engineer',
		description:
			'Frontend engineer. Real-time, dashboards, maps, WebGL. Open to relocation.'
	},
	hero: {
		name: 'Aleksei Nizhgorodov',
		role: 'Frontend Engineer',
		big: ['Real-time,', 'dashboards,', 'data-viz'],
		headline: 'Data-heavy, real-time frontend.',
		bio: 'Frontend engineer, four years in commercial development. Real-time, dashboards, maps: anywhere the data gets heavy.',
		availability: 'Open to new opportunities',
		location: 'Moscow → open to relocation',
		stats: [
			{ value: '4', label: 'years in frontend' },
			{ value: '8', label: 'production projects' },
			{ value: 'B2', label: 'English' },
			{ value: '∞', label: 'maps & charts' }
		],
		cta: {
			label: 'Download CV',
			href: '/cv/Aleksei-Nizhgorodov-Frontend-Engineer.pdf'
		}
	},
	about: {
		title: 'About',
		body: [
			'Frontend engineer, four years in commercial development. I like the hard stuff: WebSocket real-time, data-heavy dashboards, maps, WebGL.',
			'I’ve run frontend teams of 2–4: reviews, mentoring, onboarding, technical calls with clients. On other products I was the only frontend engineer.',
			'Finished an HSE master’s in digital urbanism: data analytics, geodata, urban project management. Open to new roles and relocation.'
		]
	},
	ui: {
		status: 'Status',
		numbers: 'By the numbers',
		featured: 'Featured',
		allWork: 'All work',
		experience: 'Experience',
		education: 'Education'
	},
	projects: {
		title: 'Projects',
		items: [
			{
				id: 'edya-cloud-vpn',
				title: 'Edya — commercial VPN customer portal',
				tagline:
					'A production VPN customer portal at about 20k MAU: OAuth/OTP login, one-link activation across six platforms, subscription migration from a Telegram bot, a custom censorship-resilience layer. Eight white-label brands from one codebase.',
				role: 'Frontend & architecture',
				period: '2026',
				source: 'repo',
				confidential: false,
				stack: [
					'React 19',
					'TypeScript',
					'Vite',
					'TanStack Router',
					'MobX 6',
					'Tailwind 4',
					'Zod',
					'Firebase Auth',
					'Service Worker',
					'Docker'
				],
				bullets: [
					'The service needed a portal for several brands at once. I built the whole SPA: eight brands ship from one codebase, a new one is a couple of config files, every API response is schema-checked.',
					'The portal has to open even when the main domain goes dark. On every navigation a service worker checks the mirror list and quietly moves the user to a live domain; old links from bookmarks and the bot still land in the portal. The build is obfuscated.',
					'Subscriptions move from the legacy Telegram bot to a web account in five steps, payments and remaining days included. Repeat transfers and wrong accounts are caught by the flow itself.',
					'Firebase, Lottie and QR had bloated the bundle. I split it by page and pushed the heavy parts into lazy chunks: the initial load went from 1706 to 656 KB, gzip from 467 to 175.',
					'Product events, errors and API failures flow into PostHog, sliced by brand, platform and release.'
				],
				metrics: ['~20k MAU', '−62% bundle (1706→656 KB)', '8 white-label brands', '6 activation platforms'],
				links: [{ label: 'edya.org', href: 'https://edya.org', kind: 'live' }]
			},
			{
				id: 'edya-hub-ai',
				title: 'EdyaAI — AI super-app in Telegram',
				tagline:
					'Midjourney, GPT-Image and LLM chat in one Telegram Mini App. I owned the WebSocket generation engine, the payments layer and the legacy-chat integration.',
				role: 'Frontend: real-time, payments, chat · team project',
				period: '2025 — 2026',
				source: 'repo',
				confidential: false,
				stack: [
					'React 19',
					'TypeScript',
					'MobX 6',
					'TanStack Router',
					'Telegram Mini Apps SDK',
					'Zod',
					'WebSocket',
					'SSE',
					'Next.js 15',
					'Docker'
				],
				bullets: [
					'Generation shows live progress: a custom WebSocket client tracks every request separately and reconnects on its own. A dropped connection doesn’t lose a single generation.',
					'Beyond plain generate, users get the full Midjourney toolset: variations, upscale, zoom, pan, blending images. History is stored as a tree, you can branch from any step.',
					'Monetization was all mine: plans, subscriptions, promo codes, payments. Real money in production.',
					'The legacy chat is embedded into the new app through an iframe with full integration, down to haptics and the keyboard. I set up the deploy myself. Users never notice the seam.'
				],
				metrics: ['real-time WebSocket generation', 'Midjourney + GPT-Image + LLM', 'live paid subscriptions'],
				links: [{ label: 'edya.org', href: 'https://edya.org', kind: 'live' }]
			},
			{
				id: 'cartography',
				title: 'Cartography & real-time monitoring',
				tagline:
					'Several large Leaflet projects: geozones, real-time markers and long tracks with timelines, with custom layer logic that keeps thousands of objects smooth.',
				role: 'Frontend · map layer & rendering',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'Leaflet', 'WebGL', 'Canvas', 'MobX'],
				bullets: [
					'The map has to hold thousands of markers and long tracks. I wrote the layer logic and the Canvas/WebGL rendering myself: clustering, thinning. It doesn’t drop frames on large datasets.',
					'For monitoring I added live marker updates, geozones and tracks with a timeline: operators scrub movement history by time.',
					'The map became a component set with a single API. Several team products run on it now.'
				]
			},
			{
				id: 'touchmed-dashboards',
				title: 'B2B occupational-health analytics',
				tagline:
					'In ~2 weeks: a backend-for-frontend, a resilient data pipeline and ~20 clinical dashboards over medical terminals. A custom Russia map, read-layer RBAC on medical data, blood-pressure classification per the national guideline in SQL.',
				role: 'Frontend, BFF & data layer',
				period: '2026',
				source: 'repo',
				confidential: true,
				ndaLabel: 'NDA',
				stack: [
					'TypeScript',
					'React',
					'MobX',
					'ECharts',
					'Node + Express',
					'Drizzle ORM',
					'PostgreSQL',
					'Zod',
					'Docker'
				],
				bullets: [
					'From zero to MVP in two weeks. The frontend and the BFF live in one monorepo with shared data schemas: the same types run from the DB to the UI, upstream credentials never reach the browser.',
					'The medical-terminal API was flaky and records could not be lost. The pipeline retries failures, waits out outage streaks and resumes where it stopped. Nothing gets lost and nothing needs a manual restart.',
					'Hiding medical data in the UI is not enough. I separated it at the database and read level: a role without clearance never even reads the medical fields, so they never reach the client.',
					'There was no ready map engine for a raster Russia silhouette. I wrote my own coordinate mapping onto the image and a map component with bubbles and region drill-down.'
				],
				metrics: ['~20 clinical dashboards', 'outage-proof data pipeline', 'RBAC on medical data', 'MVP in 2 weeks']
			},
			{
				id: 'video-analytics',
				title: 'Video analytics platform',
				tagline:
					'Frontend for a surveillance and analytics platform, designed from scratch: TypeScript, React, MobX. Then code reviews and team mentoring.',
				role: 'Frontend · architecture from scratch, team reviews',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'MobX', 'WebSockets', 'Recharts'],
				bullets: [
					'I started the frontend from scratch: architecture on TypeScript, React and MobX, the patterns set. The team keeps building features on that base; I reviewed and mentored.',
					'Dashboards on Recharts update live, no reloads.',
					'Large lists were sluggish: I virtualized them, cached the heavy work and cleaned out the memory leaks.'
				]
			},
			{
				id: 'pdf-generator',
				title: 'PDF report generator (custom library)',
				tagline:
					'A custom report library built from React components: prints WebGL maps and charts into PDF, numbers pages and adds running headers itself. Built after jsPDF and react-pdf couldn’t do it.',
				role: 'Frontend · library author',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'WebGL', 'Canvas', 'jsPDF'],
				bullets: [
					'Reports needed maps and charts, and neither jsPDF nor react-pdf can render WebGL or complex layout. My library assembles a PDF straight from React components, WebGL maps included. Reports look like the product UI.',
					'Multi-page reports get page numbers and running headers automatically, print-ready as generated.',
					'There is one render layer: the same React components drive both the screen and the PDF, so the UI and the reports never drift apart.'
				]
			},
			{
				id: 'kids-task-tracker',
				title: 'Gamified kids’ task tracker',
				tagline:
					'A dashboard on a large touch screen plus a parent PWA, two clients sharing state. I led the team that shipped it as native apps on Capacitor.',
				role: 'Frontend · two clients + native on Capacitor, led the native team',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'PWA', 'Capacitor', 'WebSockets', 'Service Worker'],
				bullets: [
					'The product lives on two very different clients: a gamified dashboard on a big touch screen and a PWA for parents. Both are built around shared state with live sync, so the screen and the parent’s phone always match.',
					'The team I led took it to the stores and Android TV: the web app went into native builds on Capacitor for iOS, Android and Android TV.',
					'A service worker gives it offline and auto-update: it runs without a network and updates itself.'
				]
			},
			{
				id: 'feedback-kiosk',
				title: 'Service-window feedback kiosk',
				tagline:
					'In ~4 days, built a window tablet that reacts to the queue over WebSocket (no relay backend), entertains and shows contextual ads during service, then collects the official service-quality survey.',
				role: 'Frontend · MVP architect',
				period: '2026',
				source: 'repo',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['React 18', 'TypeScript', 'Vite', 'WebSocket', 'Emotion', 'Framer Motion', 'Feature-Sliced'],
				bullets: [
					'Each tablet has to notice on its own that a ticket was called to its window, and there is no relay backend. The client listens to the shared queue over WebSocket, diffs its states and works out call, repeat and finish for its own window.',
					'The survey sometimes fired twice: a fallback timer raced the operator’s real finish. A state machine with stale-event guards fixed it.',
					'The wait is filled with contextual ads picked by a “service → life situation” heuristic and a mini-game that tunes difficulty to the player’s reaction time. Even older visitors play it.',
					'Animations stuttered. I rewrote the progress bar so the GPU draws it with no layout work: it runs smooth.'
				],
				metrics: ['WebSocket queue, no relay', 'official quality survey', 'MVP in 4 days']
			}
		]
	},
	stack: {
		title: 'Stack',
		groups: [
			{ label: 'Frontend', items: ['TypeScript', 'React', 'Svelte', 'JavaScript', 'ES6+'] },
			{ label: 'Maps & data-viz', items: ['Leaflet', 'WebGL', 'Canvas', 'ECharts', 'Recharts', 'QGIS'] },
			{ label: 'State & data', items: ['MobX', 'Redux', 'Zod', 'REST', 'WebSocket', 'SSE'] },
			{ label: 'Build & infra', items: ['Vite', 'Webpack', 'Capacitor', 'PWA', 'Service Worker', 'Docker', 'Nginx', 'CI/CD'] },
			{ label: 'Testing', items: ['Vitest', 'React Testing Library', 'Playwright'] }
		]
	},
	background: {
		title: 'Background',
		work: [
			{
				place: 'Perfema',
				role: 'Frontend Developer',
				period: '2023 — now',
				logo: '/logo/perfema.svg',
				summary: 'My full-time job, products built from scratch. Ran frontend teams of 2–4: reviews, mentoring, onboarding, technical calls with clients. Maps, dashboards, analytics, native apps, a custom PDF library.'
			},
			{
				place: 'Edya',
				role: 'Frontend · part-time',
				logo: '/logo/edya.svg',
				logoBg: true,
				summary: 'Part-time: a VPN customer portal at ~20k MAU (white-label across eight brands, a custom censorship-failover layer) and an AI super-app in Telegram (real-time generation, payments).'
			},
			{
				place: 'Yandex',
				role: 'Assessor Developer',
				period: '2023',
				logo: '/logo/yandex.svg',
				summary: 'Labeled programming and CS material for YandexGPT: wrote and edited reference answers on IT topics, checked facts.'
			}
		],
		education: [
			{
				place: 'HSE',
				program: 'Master’s, Digital Urbanism',
				period: '2024 — 2026',
				logo: '/edu/hse.svg',
				link: { label: 'Thesis', href: 'https://www.hse.ru/edu/vkr/1167123484' },
				note: 'A deliberate choice: urbanism always pulled me. The program turned out to be geo-analytics at its core (Python, geodata, QGIS), plus urban project management and planning law. So if you ever need a good-looking map, or a factory legally demolished under an urban-renewal scheme, I’m your guy!'
			},
			{
				place: 'MISIS',
				program: 'Bachelor’s, Information Systems & Technologies',
				period: '2020 — 2024',
				logo: '/edu/misis.png',
				link: { label: 'LCT 2023 (2nd place)', href: 'https://misis.ru/news/8829/' },
				note: 'The foundation: algorithms, data structures, software engineering. Hackathon prizes: 2nd at the LCT 2023 hackathon, MTS True Tech Hack, Tsifra Fest, X-MAS Hack.'
			}
		]
	},
	contacts: {
		title: 'Contacts',
		note: 'Open to new opportunities.'
	},
	footer: {
		copyright: 'Aleksei Nizhgorodov'
	}
};
