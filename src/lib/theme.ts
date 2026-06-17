import { writable } from 'svelte/store';

export type Theme = 'dark' | 'light';

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('dark');

	return {
		subscribe,
		toggle: () =>
			update((current) => {
				const next = current === 'dark' ? 'light' : 'dark';
				document.documentElement.setAttribute('data-theme', next);
				localStorage.setItem('theme', next);
				return next;
			}),
		init: () => {
			const stored = localStorage.getItem('theme') as Theme | null;
			const preferred = window.matchMedia('(prefers-color-scheme: light)').matches
				? 'light'
				: 'dark';
			const resolved = stored ?? preferred;
			document.documentElement.setAttribute('data-theme', resolved);
			set(resolved);
		}
	};
}

export const theme = createThemeStore();
