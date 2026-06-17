<script lang="ts">
	import { t } from '$lib/i18n';
	import PixelCanvas from './PixelCanvas.svelte';

	const nameParts = $derived($t.hero.name.split(' '));
</script>

<section class="mx-auto max-w-3xl px-6 pb-20 pt-4">
	<PixelCanvas />

	<div class="mt-10">
		<img
			src="/avatar.jpg"
			alt={$t.hero.name}
			width="96"
			height="96"
			class="mb-6 h-24 w-24 rounded-full object-cover ring-2 ring-accent/40"
		/>
		<p class="font-mono text-[10px] uppercase tracking-[0.3em] text-text-muted">
			{$t.hero.role}
		</p>

		<h1 class="mt-3 text-5xl font-extrabold leading-[0.9] tracking-tight sm:text-6xl md:text-7xl">
			<span class="text-accent">{nameParts[0]}</span><br />
			<span class="text-text-primary">{nameParts.slice(1).join(' ')}</span>
		</h1>

		<p class="mt-5 max-w-md text-lg font-medium text-text-primary">
			{$t.hero.headline}
		</p>

		<p class="mt-5 max-w-md text-base leading-relaxed text-text-secondary">
			{$t.hero.bio}
		</p>

		<div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
			<a
				href={$t.hero.cta.href}
				class="inline-flex items-center gap-2 self-start rounded-full bg-accent px-5 py-2 text-sm font-bold text-background transition-opacity hover:opacity-90"
			>
				{$t.hero.cta.label}
				<span aria-hidden="true">↓</span>
			</a>
			<p class="flex items-center gap-2 font-mono text-xs text-text-muted">
				<span class="inline-block h-2 w-2 shrink-0 rounded-full bg-accent"></span>
				{$t.hero.availability}
			</p>
		</div>
	</div>
</section>
