import { locale, type Locale } from '$lib/i18n';

export const prerender = true;

export function load({ url }: { url: URL }) {
	const lang: Locale = url.pathname.startsWith('/ru') ? 'ru' : 'en';
	locale.set(lang);
	return { lang };
}
