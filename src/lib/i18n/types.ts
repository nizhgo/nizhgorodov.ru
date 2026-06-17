export interface Translations {
	meta: {
		title: string;
		description: string;
	};
	hero: {
		name: string;
		bio: string;
	};
	projects: {
		title: string;
		items: {
			title: string;
			description: string;
			tags: string[];
		}[];
	};
	stack: {
		title: string;
		items: string[];
	};
	background: {
		title: string;
		work: { place: string; role: string; period: string }[];
		education: { place: string; program: string; period: string }[];
	};
	contacts: {
		title: string;
	};
	footer: {
		copyright: string;
	};
}
