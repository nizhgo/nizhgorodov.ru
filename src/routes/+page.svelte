<script lang="ts">
	import Home from '$lib/components/Home.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// "/" is the real English page (default). For a Russian-language browser we
	// softly forward to /ru on the first visit, unless the visitor already made
	// a manual choice this session.
	onMount(() => {
		if (sessionStorage.getItem('lang-choice')) return;
		if (navigator.language?.toLowerCase().startsWith('ru')) {
			goto('/ru', { replaceState: true });
		}
	});
</script>

<Home />
