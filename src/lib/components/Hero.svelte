<script lang="ts">
	import { t } from '$lib/i18n';
	import PixelCanvas from './PixelCanvas.svelte';

	const nameParts = $derived($t.hero.name.split(' '));
</script>

<section class="mx-auto max-w-3xl px-6 pb-20 pt-4">
	<PixelCanvas />

	<div class="mt-10">
		<p class="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
			Frontend Developer
		</p>

		<h1 class="mt-3 text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl">
			<span class="text-accent">{nameParts[0]}</span><br />
			<span class="text-text-primary">{nameParts.slice(1).join(' ')}</span>
		</h1>

		<p class="mt-8 max-w-md text-base leading-relaxed text-text-secondary">
			{$t.hero.bio}
		</p>
	</div>
</section>
