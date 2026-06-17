import type { Translations } from './types';

export const en: Translations = {
	meta: {
		title: 'Aleksey Nizhgorodov | Frontend Engineer',
		description:
			'Frontend engineer and team lead. Leaflet maps, dashboards, data-viz, WebGL. I write my own libraries when off-the-shelf falls short. Open to relocation and freelance.'
	},
	hero: {
		name: 'Aleksey Nizhgorodov',
		role: 'Frontend Engineer',
		big: ['Hard', 'frontend'],
		headline: 'Maps, dashboards, visualizations. Custom engines when off-the-shelf falls short.',
		bio: 'Frontend engineer, ~4 years in product. I build the hard stuff and ship it.',
		availability: 'Open to relocation & remote · hybrid / office · freelance',
		location: 'Moscow → open to relocation',
		stats: [
			{ value: '4', label: 'years in frontend' },
			{ value: '3', label: 'frontend devs led' },
			{ value: '8', label: 'case studies' },
			{ value: 'B2', label: 'English' }
		],
		cta: {
			label: 'Download CV',
			href: '/cv/aleksey-nizhgorodov-en.pdf'
		}
	},
	about: {
		title: 'About',
		body: [
			'Frontend engineer, ~4 years in product. I love the hard stuff most: Leaflet maps, data-heavy dashboards, visualizations, WebGL. When off-the-shelf libraries aren’t enough, I write my own.',
			'I’ve worked both ways: sometimes leading a frontend team — reviews, mentoring, architecture from scratch; sometimes being the only frontend and carrying a product end to end.',
			'Finishing an HSE master’s in digital urbanism — lots of geodata, Python and QGIS. Open to relocation and remote, available for freelance.'
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
				role: 'Frontend lead / architect',
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
					'Task: a commercial VPN needed a multi-brand web cabinet. Did: designed and built the whole SPA — file-based routing with auto code-splitting, a root store of 8 domain stores, and a hand-rolled API client that Zod-validates every response. Result: a shipped product, white-labeled into 8 brands from one codebase via a build-time flag.',
					'Task: keep the cabinet reachable under blocking when a domain is killed. Did: a custom domain-failover layer — a service worker fetches a live-mirror list and redirects to the first reachable domain, plus a static fallback page; the endpoint is hidden behind obfuscation. Result: a censorship-resilience layer you only build for a genuinely targeted service.',
					'Task: migrate legacy Telegram-bot subscriptions into web accounts. Did: a 5-step migration state machine with cross-account login and payment detection by observing growth in the subscription term vs a stored baseline. Result: a working cross-account transfer handling the “already migrated” edge case.',
					'Task: a heavy bundle (Firebase / Lottie / QR). Did: route auto code-splitting + manual vendor chunking and lazy-loaded heavy pages. Result: initial bundle 1706 → 656 KB, gzip 467 → 175 KB.'
				],
				metrics: ['−62% bundle size (1706→656 KB)', '8 white-label brands', '6 activation platforms', 'OAuth/OTP auth'],
				links: [{ label: 'edya.org', href: 'https://edya.org', kind: 'live' }]
			},
			{
				id: 'edya-hub-ai',
				title: 'EdyaAI — AI super-app in Telegram',
				tagline:
					'A team product where I owned the WebSocket generation engine, the payments layer, and the legacy-chat integration. Midjourney, GPT-Image and LLM chat behind one interface — with real-time and subscriptions.',
				role: 'Senior / Lead Frontend · team project',
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
					'Task: real-time Midjourney generation inside Telegram with live progress. Did: sole-designed a custom WebSocket client (622 lines, EventEmitter + MobX) with a request-registry — every action gets a UUID, a pending entry with a state machine, a 7-min per-request timeout, auto-reconnect. Result: a resilient real-time generation channel that survives connection drops.',
					'Task: expose Midjourney’s full toolset, not just generate. Did: a generation-action engine (834 lines of MobX) modeling the tree — vary / upscale / upsample / zoom / pan / blend / reroll — with parent-linked history nodes. Result: a complete edit-your-generation UX on top of a quirky backend.',
					'Task: monetization. Did: built the whole paid layer (tokens / tariffs / subscriptions) — purchases, pay-in-external-browser, promocodes, balance polling. Result: working real money flows in production.',
					'Task: fold the legacy chat under one roof and ship to prod. Did: own deployment (Docker + nginx) and single-handedly embedded a separate Next.js chat app via iframe with a Telegram↔iframe bridge (safe-area / keyboard via postMessage, relaying haptics). Result: one unified deploy and seamless in-hub chat.'
				],
				metrics: ['real-time WebSocket generation', 'Midjourney + GPT-Image + LLM', 'live paid subscriptions'],
				links: [{ label: 'EdyaAI on Telegram', href: 'https://t.me/EdyaAIrobot', kind: 'live' }]
			},
			{
				id: 'cartography',
				title: 'Cartography & real-time monitoring',
				tagline:
					'Several large Leaflet projects: geozones, real-time markers and long tracks with timelines — with custom layer logic and rendering optimized for thousands of objects.',
				role: 'Frontend / team lead · product team',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'Leaflet', 'WebGL', 'Canvas', 'MobX'],
				bullets: [
					'Task: render thousands of markers and long tracks on a map without lag. Did: custom layer logic and render optimization (clustering / thinning, Canvas / WebGL drawing). Result: an interactive map that stays smooth on large datasets.',
					'Task: real-time monitoring. Did: real-time marker updates, geozones, and tracks with timelines to replay movement history. Result: an operator monitoring tool with time-based track playback.',
					'Task: reuse the map across several products. Did: extracted the map layer into reusable components with a single API. Result: a shared cartographic foundation for several team projects.'
				]
			},
			{
				id: 'touchmed-dashboards',
				title: 'B2B occupational-health analytics',
				tagline:
					'In ~2 weeks: a backend-for-frontend, a resilient ingest pipeline and ~20 clinical dashboards over medical terminals — a custom Russia map, read-layer RBAC on medical data, and blood-pressure classification per the national guideline in SQL.',
				role: 'Lead engineer',
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
					'Task: stand up a B2B medical-analytics product from scratch in ~2 weeks. Did: solo-built a pnpm monorepo — Vite + React + MobX frontend, an Express BFF, and a shared package of Zod schemas as the single source of truth. Result: a working MVP where the browser never sees upstream credentials and types are end-to-end from DB to UI.',
					'Task: pull data from an unreliable external API without losing records. Did: a custom upstream client and idempotent ingest — backoff (6 attempts), a circuit breaker (8-failure threshold, 60s cooldown), 7-day windows with cursor pagination, an incremental cron. Result: resilient backfill and sync with no manual restarts.',
					'Task: medical data needs gating stronger than hiding it in the UI. Did: split tables and read-layer RBAC — a narrow role is never JOINed to medical fields. Result: sensitive fields are structurally unreachable on the backend, not just hidden on the client.',
					'Task: a regional map with no off-the-shelf geo engine for a raster Russia silhouette. Did: a custom lat/lon → image-percent projection (anchor calibration, antimeridian normalization) and a map component with proportional bubbles and drill-down. Result: an interactive Russia choropleth in the dashboard.'
				],
				metrics: ['~20 clinical dashboards', 'resilient ingest (circuit breaker)', 'read-layer RBAC on PHI', 'MVP in 2 weeks']
			},
			{
				id: 'video-analytics',
				title: 'Video analytics platform',
				tagline:
					'Frontend architecture from scratch for a surveillance and analytics platform on TS / React / MobX — architecture, code review, team mentoring.',
				role: 'Frontend / team lead · architecture from scratch',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'MobX', 'WebSockets', 'Recharts'],
				bullets: [
					'Task: build the frontend of a video-analytics platform from scratch. Did: designed the architecture on TypeScript / React / MobX, set the patterns, ran code review and mentored the team. Result: a scalable codebase the team builds product features on.',
					'Task: real-time analytics dashboards. Did: Recharts dashboards with real-time updates. Result: operators see analytics in real time.',
					'Task: UI performance with large lists. Did: list virtualization, memoization, Chrome DevTools profiling, and memory-leak hunting. Result: a responsive UI on large datasets.'
				]
			},
			{
				id: 'pdf-generator',
				title: 'PDF report generator (custom library)',
				tagline:
					'A custom report library from React components: renders WebGL maps and charts into PDF, with auto page numbering and headers/footers. jsPDF / react-pdf couldn’t do it — so I built my own.',
				role: 'Frontend / library author',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'WebGL', 'Canvas', 'jsPDF'],
				bullets: [
					'Task: produce reports with maps and charts, but off-the-shelf libs (jsPDF / react-pdf) can’t render WebGL maps or complex layout. Did: built a custom library that assembles a PDF from React components and embeds WebGL maps and charts. Result: reports indistinguishable from the product UI, with no hand-built PDF layout.',
					'Task: multi-page reports with navigation. Did: automatic page numbering and running headers/footers. Result: print-ready documents with correct pagination.',
					'Task: reuse UI components for print. Did: a single render layer — the same React components drive both screen and PDF. Result: one source of truth for UI and reports.'
				]
			},
			{
				id: 'kids-task-tracker',
				title: 'Gamified kids’ task tracker',
				tagline:
					'A dashboard on a large touch screen + a parent PWA: two clients sharing state. Led the team building native apps on Capacitor (iOS / Android / Android TV).',
				role: 'Frontend / team lead · led the native team',
				source: 'resume',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['TypeScript', 'React', 'PWA', 'Capacitor', 'WebSockets', 'Service Worker'],
				bullets: [
					'Task: one product across two very different clients — a gamified dashboard on a large touch screen and a PWA for parents/admins. Did: designed two clients sharing state with real-time sync. Result: a consistent product on the touch screen and in the parent’s pocket.',
					'Task: ship to native stores and Android TV. Did: led the team packaging the web app into native apps on Capacitor (iOS / Android / Android TV). Result: one codebase delivered to several platforms.',
					'Task: offline and auto-update. Did: a Service Worker (offline mode, auto-update). Result: the app works without network and updates itself.'
				]
			},
			{
				id: 'feedback-kiosk',
				title: 'Service-window feedback kiosk (GovTech)',
				tagline:
					'In ~4 days, built a window tablet that reacts to the queue over WebSocket (no relay backend), entertains and shows contextual ads during service, then collects the official government satisfaction survey.',
				role: 'Frontend / MVP architect',
				period: '2026',
				source: 'repo',
				confidential: true,
				ndaLabel: 'NDA',
				stack: ['React 18', 'TypeScript', 'Vite', 'WebSocket', 'Emotion', 'Framer Motion', 'Feature-Sliced'],
				bullets: [
					'Task: the tablet must decide on its own when a ticket is called to its window, with no relay backend. Did: a self-reconnecting WebSocket queue client that diffs state snapshots and derives call / recall / finish events by its own window id. Result: backend-less, per-window event routing.',
					'Task: handle the race between a fallback timer and the operator’s real “finish” event. Did: a hand-written state machine idle → called → serving → rating → thanks with stale-event guards. Fixed a real duplicate-survey bug. Result: a robust flow with no double survey popup.',
					'Task: monetize dwell time at the window with relevant ads and entertain slow visitors. Did: a heuristic “service → life-situation” engine, legally-compliant ad formats, and an adaptive mini-game that tunes to the player’s reaction time. Result: a contextual AdTech layer plus entertainment elderly visitors can play.',
					'Task: remove animation jank on the tablet. Did: moved the slide progress bar from a JS width animation to CSS keyframes scaleX (compositor-only, no layout). Result: a smooth, GPU-composited progress bar.'
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
				summary: 'Built products from scratch: architecture, code, reviews, mentoring interns. Maps, dashboards, analytics, native apps, a custom PDF report generator. Sometimes leading the frontend team, sometimes the only frontend.'
			},
			{
				place: 'Yandex',
				role: 'Assessor Developer',
				period: '2023',
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
			{ place: 'MISIS', program: 'Bachelor’s, IS&T', period: '2020 — 2024', logo: '/edu/misis.png' }
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
