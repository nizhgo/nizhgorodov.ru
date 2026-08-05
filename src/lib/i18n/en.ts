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
					'The service needed a portal for several brands at once. I built the whole SPA: file-based routing with auto code-splitting, a root store of eight domain stores, a hand-rolled API client that Zod-validates every response. White-label builds come from a build-time flag; a new brand is a config change.',
					'The portal has to open even when the main domain is blocked. On every navigation a service worker revalidates the mirror list and moves the user to a live domain, keeping the path; visits from bot links and bookmarks land on a static gate page on GCS. Both the bundle and the gate are obfuscated.',
					'Subscriptions migrate from the legacy Telegram bot in a five-step flow: cross-account login, payment detected by watching the subscription term grow against a stored baseline, the “already migrated” case handled.',
					'Firebase, Lottie and QR had bloated the bundle. Route auto-splitting, manual vendor chunks and lazy heavy pages brought the initial load from 1706 down to 656 KB, gzip from 467 to 175.',
					'Product events, exceptions and API failures flow into PostHog, sliced by brand, platform and release.'
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
					'Generation had to show live progress, so I wrote a custom WebSocket client on EventEmitter and MobX. Every request gets a UUID, a registry entry and its own state machine, with per-action timeouts and auto-reconnect. The channel survives connection drops.',
					'Generate alone wasn’t enough, I wanted the full Midjourney toolset. The action engine models history as a tree with parent-linked nodes: vary, upscale, zoom, pan, blend, reroll, all on top of a not-so-stable backend API.',
					'Monetization was all mine: tokens, plans, subscriptions, external-browser payments, promo codes, balance polling. Live in production.',
					'The legacy Next.js chat is embedded in the hub through an iframe with a full bridge to Telegram: safe-area and keyboard over postMessage, haptics relayed through. I set up the deploy myself, Docker and nginx. Users never notice the seam.'
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
					'The product had to stand up from scratch in about two weeks. I set up a pnpm monorepo: a Vite + React + MobX frontend, an Express BFF and a shared package of Zod schemas both sides import. Upstream credentials never reach the browser; the same types run from DB to UI.',
					'The medical-terminal API was unreliable and records couldn’t be lost. Ingest is safe to re-run: backoff over six attempts, a circuit breaker with an 8-failure threshold and a 60-second cooldown, 7-day windows with cursor pagination, an incremental cron. Upstream outages need no manual restarts.',
					'Hiding medical data in the UI isn’t enough. I split it into separate tables with RBAC at the read layer: a narrow role is simply never JOINed to the medical fields, so they never reach the client.',
					'There was no ready geo engine for a raster Russia silhouette. I wrote a lat/lon to image-percent projection, calibrated by two corners with antimeridian normalization, and a map component with proportional bubbles and drill-down.'
				],
				metrics: ['~20 clinical dashboards', 'ingest with a circuit breaker', 'read-layer RBAC on PHI', 'MVP in 2 weeks']
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
					'Large lists were sluggish. I virtualized them, memoized the heavy work, profiled in DevTools and cleaned out the memory leaks.'
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
					'Each tablet has to notice on its own that a ticket was called to its window, and there is no relay backend. A self-reconnecting WebSocket client diffs queue snapshots and derives call, recall and finish events by its own window id.',
					'A fallback timer raced the operator’s real finish event and doubled the survey. A state machine (idle → called → serving → rating → thanks) with stale-event guards fixed it.',
					'The wait is filled with contextual ads picked by a “service → life situation” heuristic and a mini-game that tunes difficulty to the player’s reaction time. Even older visitors play it.',
					'Animations stuttered, so the slide progress bar moved from a JS width animation to CSS keyframes with scaleX: compositor-only, no layout, smooth on the GPU.'
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
				note: 'A deliberate choice: urbanism always pulled me. The program turned out to be data analytics at its core (Python, geodata, QGIS), plus urban project management and planning law. So if you ever need a good-looking map, or a factory legally demolished under an urban-renewal scheme, I’m your guy.'
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
