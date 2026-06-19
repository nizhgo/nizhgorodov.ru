<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { t, locale } from '$lib/i18n';
	import { theme } from '$lib/theme';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let { children } = $props();

	const SITE = 'https://nizhgorodov.ru';

	let isRu = $derived($page.url.pathname.startsWith('/ru'));
	let canonical = $derived(isRu ? `${SITE}/ru` : `${SITE}/`);
	let ogImage = $derived(isRu ? `${SITE}/og.png` : `${SITE}/og-en.png`);
	let ogLocale = $derived(isRu ? 'ru_RU' : 'en_US');
	let ogLocaleAlt = $derived(isRu ? 'en_US' : 'ru_RU');

	onMount(() => {
		theme.init();
	});

	// Keep the active locale (and <html lang>) in sync with the URL on every
	// client navigation — don't rely on load() re-running.
	$effect(() => {
		const lang = isRu ? 'ru' : 'en';
		locale.set(lang);
		document.documentElement.lang = lang;
	});
</script>

<svelte:head>
	<title>{$t.meta.title}</title>
	<meta name="description" content={$t.meta.description} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="en" href={`${SITE}/`} />
	<link rel="alternate" hreflang="ru" href={`${SITE}/ru`} />
	<link rel="alternate" hreflang="x-default" href={`${SITE}/`} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="nizhgorodov.ru" />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={$t.meta.title} />
	<meta property="og:description" content={$t.meta.description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={$t.meta.title} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:locale:alternate" content={ogLocaleAlt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$t.meta.title} />
	<meta name="twitter:description" content={$t.meta.description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={$t.meta.title} />
</svelte:head>

<div class="min-h-screen bg-background text-text-primary">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>
