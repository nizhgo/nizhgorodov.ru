<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { t, locale } from '$lib/i18n';
	import { theme } from '$lib/theme';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		theme.init();
	});

	$effect(() => {
		document.documentElement.lang = $locale;
	});
</script>

<svelte:head>
	<title>{$t.meta.title}</title>
	<meta name="description" content={$t.meta.description} />
</svelte:head>

<div class="min-h-screen bg-background text-text-primary">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>
