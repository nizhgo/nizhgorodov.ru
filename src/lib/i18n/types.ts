export interface ProjectLink {
	label: string;
	href: string;
	kind?: 'repo' | 'live' | 'demo' | 'video' | 'doc';
}

export interface ProjectCard {
	id: string;
	title: string;
	tagline: string;
	role: string;
	period?: string;
	source: 'repo' | 'resume' | 'both';
	confidential?: boolean;
	ndaLabel?: string;
	stack: string[];
	bullets: string[];
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
		big: string[];
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
	about: {
		title: string;
		body: string[];
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
		work: {
			place: string;
			role: string;
			period: string;
			summary?: string;
			logo?: string;
			logoBg?: boolean;
		}[];
		education: {
			place: string;
			program: string;
			period: string;
			note?: string;
			logo?: string;
			link?: { label: string; href: string };
		}[];
	};
	contacts: {
		title: string;
		note: string;
	};
	footer: {
		copyright: string;
	};
}
