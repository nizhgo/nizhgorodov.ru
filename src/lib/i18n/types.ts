export interface ProjectLink {
	label: string;
	href: string;
	kind?: 'repo' | 'live' | 'demo' | 'video' | 'doc';
}

export interface ProjectCard {
	/** stable slug — MUST be identical across ru/en for index alignment */
	id: string;
	title: string;
	/** 1–2 sentence hook */
	tagline: string;
	/** e.g. "Solo author", "Team Lead", "~53% of commits" */
	role: string;
	period?: string;
	source: 'repo' | 'resume' | 'both';
	/** true → render an NDA badge and hide links */
	confidential?: boolean;
	/** short label shown on the NDA badge, e.g. "NDA · Perfema" */
	ndaLabel?: string;
	stack: string[];
	/** task → did → result, recruiter-readable */
	bullets: string[];
	/** only verified, code-backed numbers */
	metrics?: string[];
	links?: ProjectLink[];
}

export interface StackGroup {
	label: string;
	items: string[];
}

export interface Translations {
	meta: {
		title: string;
		description: string;
	};
	hero: {
		name: string;
		role: string;
		headline: string;
		bio: string;
		availability: string;
		location: string;
		stats: { value: string; label: string }[];
		cta: {
			label: string;
			href: string;
		};
	};
	ui: {
		status: string;
		numbers: string;
		featured: string;
		allWork: string;
		experience: string;
		education: string;
	};
	projects: {
		title: string;
		items: ProjectCard[];
	};
	stack: {
		title: string;
		groups: StackGroup[];
	};
	background: {
		title: string;
		work: { place: string; role: string; period: string; summary?: string }[];
		education: { place: string; program: string; period: string; note?: string; logo?: string }[];
	};
	contacts: {
		title: string;
		note: string;
	};
	footer: {
		copyright: string;
	};
}
