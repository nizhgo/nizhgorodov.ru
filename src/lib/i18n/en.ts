import type { Translations } from './types';

export const en: Translations = {
	meta: {
		title: 'Aleksey Nizhgorodov | Frontend Engineer',
		description:
			'Frontend engineer. Leaflet maps, dashboards, data-viz, WebGL. I write my own libraries when off-the-shelf falls short. Open to relocation and freelance.'
	},
	hero: {
		name: 'Aleksey Nizhgorodov',
		role: 'Frontend Engineer',
		big: ['Maps,', 'dashboards,', 'data-viz'],
		headline: 'Maps, dashboards, visualizations. Custom engines when off-the-shelf falls short.',
		bio: 'Frontend engineer, four years in commercial development. I build maps, dashboards and visualizations — and ship them.',
		availability: 'Open to relocation & remote · hybrid / office · freelance',
		location: 'Moscow → open to relocation',
		stats: [
			{ value: '4', label: 'years in frontend' },
			{ value: '8', label: 'production projects' },
			{ value: 'B2', label: 'English' },
			{ value: '∞', label: 'custom engines' }
		],
		cta: {
			label: 'Download CV',
			href: '/cv/aleksey-nizhgorodov-en.pdf'
		}
	},
	about: {
		title: 'About',
		body: [
			'Frontend engineer, four years in commercial development. I love the hard stuff most: Leaflet maps, data-heavy dashboards, visualizations, WebGL. When off-the-shelf libraries aren’t enough, I write my own.',
			'I’ve worked both ways: sometimes leading a frontend team — reviews, mentoring, architecture from scratch; sometimes the only frontend, owning a product end to end.',
			'Finishing an HSE master’s in digital urbanism — geodata, Python, QGIS. Open to relocation and remote, available for freelance.'
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
				title: 'Edya — commercial VPN web cabinet',
				tagline:
					'Designed and built a production VPN cabinet: OAuth/OTP login, one-link activation across 6 platforms, subscription migration from a Telegram bot, and a custom censorship-resilience layer. White-labeled into 8 brands from one codebase.',
				role: 'Frontend & architecture, led the team',
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
					'A commercial VPN needed a multi-brand web cabinet, so I built the whole SPA: file-based routing with auto code-splitting, a root store of 8 domain stores, and a hand-rolled API client that Zod-validates every response. One codebase compiles into white-label builds for 8 brands via a build-time flag.',
					'Under blocking, the cabinet has to stay reachable even when the main domain is killed. I built a failover layer — a service worker pulls a list of live mirrors and redirects to the first reachable one, with a static fallback page, and the mirror-list endpoint is hidden behind obfuscation. The cabinet still opens when the main domain is blocked.',
					'Legacy subscriptions from the old Telegram bot had to move into new web accounts. I wrote a 5-step migration with cross-account login and payment detection by watching the subscription term grow against a stored baseline — it works across accounts and handles the “already migrated” case.',
					'Firebase, Lottie and QR had bloated the bundle. I added route auto code-splitting, manual vendor chunking and lazy-loaded the heavy pages — the initial bundle dropped from 1706 to 656 KB, gzip from 467 to 175 KB.'
				],
				metrics: ['−62% bundle size (1706→656 KB)', '8 white-label brands', '6 activation platforms', 'OAuth/OTP auth'],
				links: [{ label: 'edya.org', href: 'https://edya.org', kind: 'live' }]
			},
			{
				id: 'edya-hub-ai',
				title: 'EdyaAI — AI super-app in Telegram',
				tagline:
					'A team product where I owned the WebSocket generation engine, the payments layer, and the legacy-chat integration. Midjourney, GPT-Image and LLM chat behind one interface — with real-time and subscriptions.',
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
					'Midjourney generation inside Telegram had to show live progress, so I designed a custom WebSocket client (EventEmitter + MobX) with a request registry: every action gets a UUID and an entry with its own state machine, a 7-minute per-request timeout, and auto-reconnect. The channel survives connection drops.',
					'I wanted the full Midjourney toolset, not just generate, so I built a generation-action engine on MobX that models the history tree with parent-linked nodes — a complete set of operations (vary, upscale, zoom, pan, blend, reroll) on top of an unstable backend.',
					'I owned monetization end to end: tokens, plans, subscriptions — purchases, pay-in-external-browser, promo codes, balance polling. Real payments in production.',
					'The legacy chat had to fold under one roof and ship, so I set up the deploy (Docker + nginx) and embedded a separate Next.js chat app via iframe with a Telegram↔iframe bridge — safe-area and keyboard over postMessage, haptics relayed through. One deploy, seamless chat inside the hub.'
				],
				metrics: ['real-time WebSocket generation', 'Midjourney + GPT-Image + LLM', 'live paid subscriptions'],
				links: [{ label: 'EdyaAI on Telegram', href: 'https://t.me/EdyaAIrobot', kind: 'live' }]
			},
			{
				id: 'cartography',
				title: 'Cartography & real-time monitoring',
				tagline:
					'Several large Leaflet projects: geozones, real-time markers and long tracks with timelines — with custom layer logic and rendering optimized for thousands of objects.',
				role: 'Frontend · map layer & rendering',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'Leaflet', 'WebGL', 'Canvas', 'MobX'],
				bullets: [
					'The map had to hold thousands of markers and long tracks without lag, so I wrote my own layer logic and tuned the render — clustering, thinning, drawing on Canvas and WebGL. It stays smooth on large datasets.',
					'For real-time monitoring I added live marker updates, geozones, and tracks with timelines — an operator can scrub through movement history by time.',
					'The map had to be reused across several products, so I pulled it into a set of components with one API — a shared cartographic base for several team projects.'
				]
			},
			{
				id: 'touchmed-dashboards',
				title: 'B2B occupational-health analytics',
				tagline:
					'In ~2 weeks: a backend-for-frontend, a resilient ingest pipeline and ~20 clinical dashboards over medical terminals — a custom Russia map, read-layer RBAC on medical data, and blood-pressure classification per the national guideline in SQL.',
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
					'A B2B medical-analytics product had to stand up from scratch in ~2 weeks, so I built a pnpm monorepo: a Vite + React + MobX frontend, an Express BFF, and a shared package of Zod schemas as the single source of truth. The browser never sees the upstream credentials, and types run end to end from DB to UI.',
					'The medical-terminal API was unreliable and I couldn’t lose records, so I wrote my own client and an idempotent ingest: backoff over 6 attempts, a circuit breaker (8-failure threshold, 60s cooldown), 7-day windows with cursor pagination, and an incremental cron. Backfill and sync survive outages with no manual restarts.',
					'Medical data needs more than hiding it in the UI, so I split it into separate tables and put RBAC at the read layer — a narrow role is never JOINed to the medical fields. Sensitive data is unreachable on the backend, not just hidden on the client.',
					'There was no off-the-shelf geo engine for a raster Russia silhouette, so I wrote my own lat/lon → image-percent projection (two-corner calibration, antimeridian normalization) and a map component with proportional bubbles and drill-down — an interactive choropleth right in the dashboard.'
				],
				metrics: ['~20 clinical dashboards', 'resilient ingest (circuit breaker)', 'read-layer RBAC on PHI', 'MVP in 2 weeks']
			},
			{
				id: 'video-analytics',
				title: 'Video analytics platform',
				tagline:
					'Frontend architecture from scratch for a surveillance and analytics platform on TS / React / MobX — architecture, code review, team mentoring.',
				role: 'Frontend · architecture from scratch, team reviews',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'MobX', 'WebSockets', 'Recharts'],
				bullets: [
					'I built the frontend of a video-analytics platform from scratch — designed the architecture on TypeScript / React / MobX, set the patterns, ran reviews and mentored the team. The team keeps building features on that base.',
					'I built real-time dashboards on Recharts — operators see analytics live, without reloads.',
					'Large lists were sluggish, so I virtualized them, memoized the heavy work, profiled in Chrome DevTools and cleared the memory leaks. The UI stays responsive on large datasets.'
				]
			},
			{
				id: 'pdf-generator',
				title: 'PDF report generator (custom library)',
				tagline:
					'A custom report library from React components: renders WebGL maps and charts into PDF, with auto page numbering and headers/footers. jsPDF / react-pdf couldn’t do it — so I built my own.',
				role: 'Frontend · library author',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'WebGL', 'Canvas', 'jsPDF'],
				bullets: [
					'We needed reports with maps and charts, but jsPDF and react-pdf can’t render WebGL maps or complex layout — so I wrote a library that assembles a PDF straight from React components and embeds the WebGL maps and charts. The reports look like the product UI, with no hand-built PDF layout.',
					'For multi-page reports I added automatic page numbering and running headers and footers — print-ready documents with correct pagination.',
					'To avoid duplicating layout, I made a single render layer: the same React components drive both screen and PDF — one source of truth for the UI and the reports.'
				]
			},
			{
				id: 'kids-task-tracker',
				title: 'Gamified kids’ task tracker',
				tagline:
					'A dashboard on a large touch screen + a parent PWA: two clients sharing state. Led the team building native apps on Capacitor (iOS / Android / Android TV).',
				role: 'Frontend · two clients + native on Capacitor, led the native team',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'PWA', 'Capacitor', 'WebSockets', 'Service Worker'],
				bullets: [
					'The product lived on two very different clients — a gamified dashboard on a big touch screen and a PWA for parents. I designed both around shared state with real-time sync, so the screen and the parent’s phone always show the same thing.',
					'It had to ship to the stores and Android TV, so I led the team packaging the web app into native builds on Capacitor (iOS, Android, Android TV) — one codebase reaching several platforms.',
					'I added a Service Worker for offline and auto-update — the app works without a network and updates itself.'
				]
			},
			{
				id: 'feedback-kiosk',
				title: 'Service-window feedback kiosk (GovTech)',
				tagline:
					'In ~4 days, built a window tablet that reacts to the queue over WebSocket (no relay backend), entertains and shows contextual ads during service, then collects the official government satisfaction survey.',
				role: 'Frontend · MVP architect',
				period: '2026',
				source: 'repo',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['React 18', 'TypeScript', 'Vite', 'WebSocket', 'Emotion', 'Framer Motion', 'Feature-Sliced'],
				bullets: [
					'Each tablet had to figure out on its own when a ticket was called to its window, with no relay backend — so I wrote a self-reconnecting WebSocket client that diffs queue snapshots and derives call / recall / finish events by its own window id. Per-window routing with no backend of its own.',
					'There was a race between a fallback timer and the operator’s real “finish” event, so I wrote a state machine idle → called → serving → rating → thanks with stale-event guards and killed a duplicate-survey bug. The flow runs clean, with no double survey.',
					'I wanted to fill the wait at the window with relevant ads and entertain slower visitors, so I built a “service → life-situation” heuristic, legally-compliant ad formats, and a mini-game that tunes its difficulty to the player’s reaction time — contextual ads plus a game even older visitors can play.',
					'Animations on the tablet stuttered, so I moved the slide progress bar from a JS width animation to CSS keyframes scaleX — compositor-only, no layout. The bar runs smoothly, on the GPU.'
				],
				metrics: ['WebSocket queue, no relay', 'official gov satisfaction survey', 'MVP in 4 days']
			}
		]
	},
	stack: {
		title: 'Stack',
		groups: [
			{ label: 'Frontend', items: ['TypeScript', 'React', 'Svelte', 'JavaScript', 'ES6+'] },
			{ label: 'Maps & data-viz', items: ['Leaflet', 'WebGL', 'Canvas', 'ECharts', 'Recharts', 'QGIS'] },
			{ label: 'State & data', items: ['MobX', 'Redux', 'Zod', 'REST', 'WebSocket', 'SSE'] },
			{ label: 'Native & infra', items: ['Capacitor', 'PWA', 'Service Worker', 'Docker', 'Nginx', 'CI/CD'] },
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
				summary: 'Built products from scratch: architecture, code, reviews, mentoring interns. Maps, dashboards, analytics, native apps, a custom PDF report generator. Sometimes leading the frontend team, sometimes the only frontend.'
			},
			{
				place: 'Edya',
				role: 'Frontend · part-time',
				logo: '/logo/edya.svg',
				logoBg: true,
				summary: 'Part-time gig: a commercial VPN web cabinet (white-label across 8 brands, a custom failover layer for blocking) and an AI super-app in Telegram (real-time generation, payments).'
			},
			{
				place: 'Yandex',
				role: 'Assessor Developer',
				period: '2023',
				logo: '/logo/yandex.svg',
				summary: 'Labelled programming and CS material, wrote and edited reference answers for YandexGPT on IT topics, did fact-checking.'
			}
		],
		education: [
			{
				place: 'HSE',
				program: 'Master’s, Digital Urbanism',
				period: '2024 — 2026',
				logo: '/edu/hse.svg',
				link: { label: 'Thesis', href: 'https://www.hse.ru/edu/vkr/1167123484' },
				note: 'A deliberate choice: I’ve always been drawn to urbanism, and the program is tightly tied to data analytics (Python, geodata, QGIS) — essentially an IT track. It sharpened my cartography and geo-analytics, which I love in frontend too.'
			},
			{
				place: 'MISIS',
				program: 'Bachelor’s, Information Systems & Technologies',
				period: '2020 — 2024',
				logo: '/edu/misis.png',
				note: 'The foundation: algorithms, data structures, software engineering.'
			}
		]
	},
	contacts: {
		title: 'Contacts',
		note: 'Open to roles with relocation and to freelance work.'
	},
	footer: {
		copyright: 'Aleksey Nizhgorodov'
	}
};
