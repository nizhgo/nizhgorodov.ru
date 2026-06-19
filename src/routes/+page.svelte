<script lang="ts">
	import Home from '$lib/components/Home.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// "/" is the real English page (default). A saved choice always wins; only on
	// a first-ever visit do we fall back to the browser language. The toggle and
	// /ru write this preference, so switching to English sticks and never bounces.
	onMount(() => {
		const pref = localStorage.getItem('lang');
		if (pref === 'en') return;
		if (pref === 'ru' || navigator.language?.toLowerCase().startsWith('ru')) {
			goto('/ru', { replaceState: true });
		}
	});
</script>

<Home />
