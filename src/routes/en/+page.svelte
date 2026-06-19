<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// /en is an alias of the default English page at "/". Record the choice so the
	// "/" auto-detect doesn't forward back to /ru.
	onMount(() => {
		localStorage.setItem('lang', 'en');
		goto('/', { replaceState: true });
	});
</script>

<svelte:head>
	<meta http-equiv="refresh" content="0; url=/" />
	<link rel="canonical" href="https://nizhgorodov.ru/" />
</svelte:head>

<div class="flex min-h-[60vh] items-center justify-center px-5">
	<a href="/" class="font-mono text-sm text-accent underline underline-offset-4">
		→ nizhgorodov.ru
	</a>
</div>
